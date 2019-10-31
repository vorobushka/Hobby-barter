const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // username: {
  //   type: String,
  //   required: [true, 'поле не может оставаться пустым'],
  // },
  // email: {
  //   type: String,
  //   lowercase: true,
  //   required: [true, 'поле не может оставаться пустым'],
  //   // match: [/\S+@\S+\.\S+/, 'is invalid'],
  // },
  // password: { type: String, required: [true, 'поле не может оставаться пустым'] },
});

module.exports = mongoose.model('User', userSchema);
