import React from "react";
import GameContainer from "./../components/GameComponents/GameContainer"
import "./style.css"





function GamePages() {
 
  const questions = [
    {
        "id": 1,
        "question": "What is a method?",
        "level":"easy",
        "answer_a":"11",
        "answer_b": "34",
        "answer_c": "33",
        "answer_d": "33",
        "points": "100"
    },
    {
      "id": 2,
        "question": "What is a method?",
        "level":"easy",
        "answer_a":"11",
        "answer_b": "34",
        "answer_c": "33",
        "answer_d": "33",
        "points": "100"
        
    },
    {
      "id": 3,
      "question": "What is a method?",
      "level":"easy",
      "answer_a":"11",
      "answer_b": "34",
      "answer_c": "33",
      "answer_d": "33",
      "points": "100"
    },
    {
      "id": 4,
      "question": "What is a method?",
      "level":"easy",
      "answer_a":"11",
      "answer_b": "34",
      "answer_c": "33",
      "answer_d": "33",
      "points": "100"
    },
    {
      "id": 5,
      "question": "What is a method?",
      "level":"easy",
      "answer_a":"11",
      "answer_b": "34",
      "answer_c": "33",
      "answer_d": "33",
      "points": "100"
    },
    {
      "id": 6,
      "question": "What is a method?",
      "level":"easy",
      "answer_a":"11",
      "answer_b": "34",
      "answer_c": "33",
      "answer_d": "33",
      "points": "100"
    },
    {
      "id": 7,
      "question": "What is a method?",
      "level":"easy",
      "answer_a":"11",
      "answer_b": "34",
      "answer_c": "33",
      "answer_d": "33",
      "points": "100"
    },
    {
      "id": 8,
      "question": "What is a method?",
      "level":"easy",
      "answer_a":"11",
      "answer_b": "34",
      "answer_c": "33",
      "answer_d": "33",
      "points": "100"
    },
    {
      "id": 9,
      "question": "What is a method?",
      "level":"easy",
      "answer_a":"11",
      "answer_b": "34",
      "answer_c": "33",
      "answer_d": "33",
      "points": "100"
    },
    {
      "id": 10,
        "question": "What is a method?",
        "level":"easy",
        "answer_a":"11",
        "answer_b": "34",
        "answer_c": "33",
        "answer_d": "33",
        "points": "100"
    },
    {
       "id": 11,
        "question": "What is a method?",
        "level":"easy",
        "answer_a":"11",
        "answer_b": "34",
        "answer_c": "33",
        "answer_d": "33",
        "points": "100"
    },
    {
        "id": 12,
        "question": "What is a method?",
        "level":"easy",
        "answer_a":"11",
        "answer_b": "34",
        "answer_c": "33",
        "answer_d": "33",
        "points": "100"
    },
    {
        "id": 13,
        "question": "What is a method?",
        "level":"easy",
        "answer_a":"11",
        "answer_b": "34",
        "answer_c": "33",
        "answer_d": "33",
        "points": "100"
    },
    {
        "id": 14,
        "question": "What is a method?",
        "level":"easy",
        "answer_a":"11",
        "answer_b": "34",
        "answer_c": "33",
        "answer_d": "33",
        "points": "100"
    },
    {
        "id": 15,
        "question": "What is a method?",
        "level":"easy",
        "answer_a":"11",
        "answer_b": "34",
        "answer_c": "33",
        "answer_d": "33",
        "points": "100"
    },
    {
        "id": 16,
        "question": "What is a method?",
        "level":"easy",
        "answer_a":"11",
        "answer_b": "34",
        "answer_c": "33",
        "answer_d": "33",
        "points": "100"
    },
    {
        "id": 17,
        "question": "What is a method?",
        "level":"easy",
        "answer_a":"11",
        "answer_b": "34",
        "answer_c": "33",
        "answer_d": "33",
        "points": "100"
    },
    {
        "id": 18,
        "question": "What is a method?",
        "level":"easy",
        "answer_a":"11",
        "answer_b": "34",
        "answer_c": "33",
        "answer_d": "33",
        "points": "100"
    },
    {
        "id": 19,
        "question": "What is a method?",
        "level":"easy",
        "answer_a":"11",
        "answer_b": "34",
        "answer_c": "33",
        "answer_d": "33",
        "points": "100"
    },
    {
        "id": 20,
        
    }
];

const question = questions[0];
  return (
    <div className="container">
     
      <GameContainer  total ="20" current="1"
                      question = {question.question}
                      letter="a" answer={question.answer_a}
                     
                       />

    </div>
  );
}

export default GamePages;