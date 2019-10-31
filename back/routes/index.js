const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('тестирование');
});

router.post('/', async (req, res) => {
  // try {
  //   const user = new User({
  //     username: req.body.username,
  //     login: req.body.login,
  //     email: req.body.email,
  //     password: req.body.password,
  //   });
  // } catch (error) {
  //   res.json(error);
  // }
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
