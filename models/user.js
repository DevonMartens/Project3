const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName : {type: String, required: true}, 
  avatar: {type: String},
  location: {type: String, required: true},
  userType: {type: String, required: true},
  score: {type: Number, required: true, default: 0}, 
  questionsCorrect: {type: Number, required: true, default: 0}, 
  questionsTotal: {type: Number, required: true}, 
  languages: {type: String, required: true, default: "none"}, 
  date: { type: Date, default: Date.now }, 
});

const User = mongoose.model("User", userSchema);

module.exports = User;
