const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = mongoose.Schema({
  name: String
})

exports.Users = mongoose.model('user', userSchema);
