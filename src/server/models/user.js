var mongoose = require('mongoose');

var schema = mongoose.schema

var userSchemas = new mongoose.Schema({
    username: String,
    password: String,
})

var users = mongoose.model('users', userSchemas);

module.exports = users;