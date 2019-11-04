const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
const User = require('../models/user');
const { sessionChecker, cookiesCleaner } = require('../middleware/auth');

router.get('/', sessionChecker, (req, res) => {
  res.send('тестирование');
});

router.post('/api/registration', async (req, res) => {
  console.log('прилетело');
  try {
    const user = new User({
      email: req.body.user.email,
      login: req.body.user.login,
      password: await bcrypt.hash(req.body.user.password, 10),
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
  } else if (await bcrypt.compare(password, user.password)) {
    req.session.user = user;
    await res.json(user);
  } else {
    const message = 'Пароль введён неверно';
    res.json({ message });
  }
});

router.post('/api/auto/', (req, res) => {
  req.session.user ? res.json(req.session.user) : res.json({ user: 0 });
});

router.get('/api/logout', async (req, res, next) => {
  //console.log(req.session.user);
if (req.session.user && req.cookies.user_sid) {

    try {
      res.clearCookie('user_sid')
      await req.session.destroy();
      //res.send('go')
    }
    // try {
    //   res.clearCookie('user_sid');
    //   await req.session.destroy();
     catch (error) {
      next(error);
    }
  } else {
    res.send('не существует сессии для удаления');
  }
});


router.post('/api/edit/', async (req, res) => {
  const {
    name,
    photo,
    email,
    login,
    hobby,
    wish,
    phone,
    profession
  } = req.body.user;
const id = req.session.user._id
  const user = await User.findByIdAndUpdate(id, {
    name, 
    photo,
    email,
    login,
    hobby,
    wish,
    phone,
    profession });
  console.log(user)
})
module.exports = router;
