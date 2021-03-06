const router = require('express').Router();
const bcrypt = require('bcrypt');
const {
  User,
} = require('../../db/models');

// reg

router.post('/registration', async (req, res) => {
  const {
    name,
    email,
    password,
  } = req.body;
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (user) {
    res.status(404).json({
      error: 'Такой email уже зарегистрирован',
    });
  } else {
    const newUser = await User.create({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    });
    req.session.user = newUser;
    req.session.uid = newUser.id;
    res.status(201).json(newUser);
  }
});

// log

router.post('/login', async (req, res) => {
  const {
    email,
    password,
  } = req.body;
  
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    console.log('>>>', user)

    if (user && await bcrypt.compare(password, user.password)) {
      req.session.user = user;
      req.session.uid = user.id;
      res.status(201).json(user); // переход на /game
    } else {
      res.status(401).json({
        error: 'Неверный пароль или email',
      });
    }
  } catch (error) {
    console.log('error');
  }
});

router.get('/logout', (req, res) => {
  const { user } = req.session;
  
    req.session.destroy();
    res.clearCookie('sid');
    res.status(201).json({});
});

module.exports = router;
