import React from "react";
import GameContainer from "../components/GameContainer"
import "./style.css"





function GamePages() {
 
  const questions = [
    {
        "id": 1,
        "question": "JavaScript is a ______ Side Scripting Language",
        "level":"easy",
        "answer_choices":["Server","ISP", "Browser","None of the Above"],
        "corrct_answer": "c",
        "explanation":"JavaScript is a Browser Side Scripting Language. ASP, PHP, Per1 are Server Side Scripting Languages.",
        "points": "100"
        
    },
    {
      "id": 2,
        "question": "Which of the following is an advantage of using JavaScript?",
        "level":"easy",
        "answer_choices":["Increased interactivity", "Less server interaction", "Immediate feedback from the users", "All of the above"],
        "correct_answer": "d",
        "explanation":"JavasScript ensures increased interactivity, less server interation and immediate feedback from users",
        "points": "100"
        
    },
    {
      "id": 3,
      "question": "What is the HTML tag under which one can write the JavaScript code?",
      "level":"easy",
      "answer_choices":["<javascript>","<scripted>","<script>","<js>"],
      "correct_answer": "c",
      "explanation":"If we want to write a JavaScript code under HTML tag, you will have to use the script tag.",    
      "points": "100"
    },
    {
      "id": 4,
      "question": "Which of the following is not a JSON type?",
      "level":"easy",
      "answer_choices":["Object","Date","Array","String"],
      "correct_answer": "b",
      "explanation":""     ,
      "points": "100"
    },
    {
      "id": 5,
      "question": "Which answer represents the following order of TYPES? Object, String, Boolean, Number",
      "level":"easy",
      "answer_choices":["{},a string,false,0","[],0,true,0","{},0,false,0","{},hello,false,0"],
      "correct_answer": "c",
      "explanation": "",
      "points": "100"
    },
    {
      "id": 6,
      "question": "What is the corrct syntax for adding comments in JavaScript?",
      "level":"easy",
      "answer_choices":["<!-This is a comment -&gt","//This is a comment","-This is a comment","**This is a comment"],
      "correct_answer":"b",
      "explanation": "Correct Syntax for comments in JavaScript is //comment.",
      "points": "100"
    },
    {
      "id": 7,
      "question": "What is the method in JavaScript used to remove the whitespace at the beginning and end of any string ?",
      "level":"easy",
      "answer_choices":["strip()","trim()","stripped()","trimmed()"],
      "correct_answer": "b",
      "explaination":"The trim() method in JavaScript is used to remove the whitespaces at the beginning and end of the string.",
      "points": "100"
    },
    {
      "id": 8,
      "question": "Which built in method returns the character at the specified index?",
      "level":"easy",
      "answer_choices":["characterAt()","getCharAt()", "charAt()","none of the above"],
      "correct_answer": "c",
      "explaination": "33",
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