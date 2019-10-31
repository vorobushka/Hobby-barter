const express = require('express');

const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
  res.send('тестирование');
});

router.post('/api', async (req, res) => {
  try {
    const user = new User({
      email: req.body.user.email,
      login: req.body.user.login,
      password: req.body.user.password,
    });
    await user.save();
  } catch (error) {
    res.json(error);
  }
});

router.post(async (req, res) => {
  // const { login, password } = req.body;
  // const user = await User.findOne({ login });
  // if (!user) {
  //   const message = 'Пользователя с таим логином не существует';
  //   res.render('login', { message });
  // } else if (user.password !== password) {
  //   const message = 'Пароль введён неверно';
  //   res.render('login', { message });
  // } else {
  //   req.session.user = user;
  //   res.redirect('/dashboard');
  // }
});

module.exports = router;
