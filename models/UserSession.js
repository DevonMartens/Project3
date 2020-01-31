const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSessionSchema = new mongoose.Schema({
 userId: {
     type: Number,
default: -1
 },
 timestamp: {
     type: Date,
     default: Date.now()
 },
 isDeleted: {
     type: Boolean,
     default: false,
 }
});

// const User = mongoose.model("User", userSchema);

module.exports = mongoose.model('UserSession', 'User');




