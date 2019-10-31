const express = require('express');

const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
  res.send('тестирование');
});

router.post('/api/register/', async (req, res) => {
  try {
    const user = new User({
      email: req.body.user.email,
      login: req.body.user.login,
      password: req.body.user.password,
    });
    await user.save();
    // const messageObj = {
    //   message: 'регистрация прошла успешно',
    // };
    res.json(user);
  } catch (error) {
    res.json(error);
  }
});

router.post('/api/login/', async (req, res) => {
  const { login, password } = req.body;
  res.send('перенаправлено');
  const user = await User.findOne({ login });
  if (!user) {
    const message = 'Пользователя с таким логином не существует';
    res.json({ message });
  } else if (user.password !== password) {
    const message = 'Пароль введён неверно';
    res.json({ message });
  } else {
    req.session.user = user;
    res.json(user);
  }
});

module.exports = router;
