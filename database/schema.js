const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = mongoose.Schema({
  name: String,
  lastName: String,
  age: Number
})

exports.Users = mongoose.model('user', userSchema);
