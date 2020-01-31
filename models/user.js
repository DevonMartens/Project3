const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  userName : {type: String, required: true}, 
  location: {type: String, required: true},
  userType: {type: String, required: true},
  githubLink: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String, required: false},
  password: {type: String, required: true},
  // score: {type: Number, required: true, default: 0}, 
  questionsCorrect: {type: Number, required: true, default: 0}, 
  questionsTotal: {type: Number, required: true}, 
  languages: {type: String, required: true, default: "none"}, 
  date: { type: Date, default: Date.now }, 
  isDeleted: {type: Boolean, default: false}
});

// const User = mongoose.model("User", userSchema);

UserSchema.methods.generateHash = function(passoword){
  return.bcrypt.hashSync(passoword, bcrypt.genSaltSync(8), null);
}

UserSchema.methods.validPassword = function(passoword){
  return bcrypt.compareSync(passoword, this.passoword);
};

module.exports = mongoose.model('User', 'UserSchema');

const mongoose = require('mongoose');


