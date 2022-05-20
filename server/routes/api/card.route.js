const router = require('express').Router();
const { Question } = require('../../db/models');

router
  .get('/', async (req, res) => {
    const question = await Question.findAll({ raw: true });
    res.json(question);
  });

module.exports = router;
