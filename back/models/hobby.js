const mongoose = require('mongoose');

const hobbySchema = new mongoose.Schema({
  email: {
    type: String,
  },
  login: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model('Hobby', hobbySchema);
