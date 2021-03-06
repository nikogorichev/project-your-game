const cookiesCleaner = (req, res, next) => {
  if (req.cookies.sid && !req.session.user) {
    res.clearCookie('sid');
    res.redirect('/');
  } else {
    next();
  }
};

const sessionChecker = (req, res, next) => {
  if (req.session.user) {
    res.redirect('/main');
  } else {
    next();
  }
};

const local = (req, res, next) => {
  if (req.session.user) {
    res.locals.user = req.session.user;
    res.locals.uid = req.session.uid;
  }
  return next();
};

module.exports = { cookiesCleaner, sessionChecker, local };
