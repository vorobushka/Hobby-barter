const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  login: String,
  password: String,
  name: String,
  photo: String,
  hobby: String,
  wish: String,
  phone: String,
});

module.exports = mongoose.model('User', userSchema);
