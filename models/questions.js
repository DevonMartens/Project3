const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionsSchema = new Schema({
  quesiton: {type: String, required: true},
  correctAnswer: {type: String, required: true}, 
  randomAnswers: {type: String, required: true}, 
  language: {type: String, required: true}, 
  level: {type: String, required: true}, 
  scoreWorth: {type: Number, required: true}
});

const Questions = mongoose.model("Questions", questionsSchema);

module.exports = Questions;
