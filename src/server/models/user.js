const mongoose = require('mongoose');

const schema = mongoose.schema;

const userSchemas = new mongoose.Schema({
  username: String,
  password: String,
});

const users = mongoose.model('users', userSchemas);

module.exports = users;
