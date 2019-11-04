const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
email: String,
login: String,
password: String,
name: String,
photo: String,
email: String,
hobby: String,
wish: String,
phone: String,
profession: String,
});

module.exports = mongoose.model('User', userSchema);
