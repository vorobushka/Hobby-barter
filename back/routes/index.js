const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
const User = require('../models/user');
const { sessionChecker, cookiesCleaner } = require('../middleware/auth');

router.get('/', sessionChecker, (req, res) => {
  res.send('тестирование');
});

router.post('/api/registration', async (req, res) => {
  try {
    const user = new User({
      email: req.body.user.email,
      login: req.body.user.login,
      password: /* await bcrypt.hash(req.body.user.password, 10) */ req.body.user.password,
    });
    await user.save();
    req.session.user = user;
    res.json(user);
  } catch (error) {
    res.json(error);
  }
});

router.post('/api/login/', async (req, res) => {
  const { login, password } = req.body.user;
  const user = await User.findOne({ login });

  if (!user) {
    const message = 'Пользователя с таким логином не существует';
    res.json({ message });
  } else if (/* await bcrypt.compare(password, user.password) */ password == user.password) {
    req.session.user = user;
    await res.json(user);
  } else {
    const message = 'Пароль введён неверно';
    res.json({ message });
  }
});

router.post('/api/auto/', async (req, res) => {
  console.log(req.session.user._id);

  const id = req.session.user._id;
  const userUpdate = await User.findById(id);
  // console.log(userUpdate);
  req.session.user ? res.json(userUpdate) : res.json({ user: 0 });
});

router.post('/api/selection/', async (req, res) => {
  const id = req.session.user._id;
  const userFromProfile = await User.findById(id);
  const { wish } = userFromProfile;
  const users = await User.find({ hobby: wish });
  console.log(users);
  await res.json(users);
});

router.get('/api/logout', async (req, res, next) => {
  if (req.session.user) {
    try {
      await req.session.destroy();
      res.clearCookie('user_sid');
      res.send();
    } catch (error) {
      next(error);
    }
  } else {
    res.send('не существует сессии для удаления');
  }
});

router.post('/api/edit/', async (req, res) => {
  const { name, photo, email, login, hobby, wish, phone, profession } = req.body.user;
  const id = req.session.user._id;
  // console.log(id);

  const user = await User.findByIdAndUpdate(id, {
    name,
    photo,
    email,
    login,
    hobby,
    wish,
    phone,
    profession,
  });
  await res.json(user);
});
module.exports = router;
