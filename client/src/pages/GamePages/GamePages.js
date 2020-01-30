<<<<<<< HEAD
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
=======
import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import M from 'materialize-css';

import questions from '../questions/questions.json';
import isEmpty from '../IsEmpty/isEmpty.js';
import correctNotification from '../../assets/audio/crash.mp3';
import wrongNotification from '../../assets/audio/kick-bass.mp3';
import buttonSound from '../../assets/audio/snare.mp3';


class GamePages extends Component {
    constructor (props) {
        super(props);
        this.state ={
            questions,
            currentQuestion:{},
            nextQuestion:{},
            previousQuestion: {},
            answer: '',
            numberOfQuestions: 0,
            numberOfAnsweredQuestions:0,
            currentQuestionIndex: 0,
            score: 0,
            correctAnswers: 0,
            wrongAnswers:0,
            hints:5,
            fiftyFifty:2,
            usedFiftyFifty:false,
            time:{}
        };      
    }

    componentDidMount () {
        const { questions, currentQuestion, nextQuestion, previousQuestion } = this.state;
        this.displayQuestions(questions,currentQuestion,nextQuestion, previousQuestion);
    }

      displayQuestions = (questions = this.state.questions, currentQuestion, nextQuestion, previousQuestion) => {
          let {currentQuestionIndex} = this.state; 
          if (!isEmpty(this.state.questions)) {
              questions = this.state.questions;
              currentQuestion = questions[currentQuestionIndex];
              nextQuestion = questions[currentQuestionIndex + 1];
              previousQuestion= questions[currentQuestionIndex-1];
              const answer = currentQuestion.answer;
              this.setState({
                  currentQuestion,
                  nextQuestion,
                  previousQuestion,
                  numberOfQuestions: questions.length,
                  answer
              });
          }
      };

      handleOptionClick =(e) => {
         if (e.target.innerHTML.toLowerCase()=== this.state.answer.toLowerCase()){
             document.getElementById('correct-sound').play();
            this.correctAnswer();
            } 
            else {
             document.getElementById('wrong-sound').play();
                this.wrongAnswer()
            } 
      }

      handleNextButtonClick = ()=>{
          this.playButtonSound();
          if (this.state.nextQuestion !== undefined){
             this.setState(prevState => ({
                 currentQuestionIndex: prevState.currentQuestionIndex + 1
             }), ()=>{
                 this.displayQuestions(this.state.state, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
             });
          }
      };

      handlePreviousButtonClick = ()=>{
        this.playButtonSound();
        if (this.state.previousQuestion !== undefined){
           this.setState(prevState => ({
               currentQuestionIndex: prevState.currentQuestionIndex - 1
           }), ()=>{
               this.displayQuestions(this.state.state, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
           });
        }
    };

       handleQuitButtonClick = ()=> {
           this.playButtonSound();
           if (window.confirm('Are You Sure You Want To End Your Game?')){
               this.props.history.push('/');
              
           }
       };

      handleButtonClick = (e)=> {
          switch (e.target.id){
              case 'next-button':
                  this.handleNextButtonClick();
                  break;

              case 'previous-button':
                this.handlePreviousButtonClick();
                break;

             case 'quit-button':
                this.handleQuitButtonClick();
                break;

              default:
                 break;
          }
          

      };

      playButtonSound = () =>{
          document.getElementById('button-sound').play();
      }

      correctAnswer = () =>{
          M.toast({
              html: 'Correct Answer!!!',
              classes: 'toast-valid',
              displayLength: 1500
          });
          this.setState(prevState =>({
              score: prevState.score + 1,
              correctAnswers: prevState.correctAnswers + 1,
              currentQuestionIndex: prevState.currentQuestionIndex + 1,
              numberOfAnsweredQuestions:prevState.numberOfAnsweredQuestions + 1
          }), ()=>{
              this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion)
          });
      }
         
      wrongAnswer = () =>{
        navigator.vibrate(1000)
        M.toast({
            html: 'Wrong Answer!!!',
            classes: 'toast-valid',
            displayLength: 1500
        });
        this.setState(prevState =>({
           wrongAnswers: prevState.wrongAnswers + 1,
           currentQuestionIndex: prevState.currentQuestionIndex + 1,
           numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
        }), ()=> {
            this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion)
        });
    }

    handleHints = () =>{
        const options = Array.from(document.querySelectorAll('.option'));
        let indexOfAnswer;

        options.forEach((option, index)=>{
            if(option.innerHTML.toLowerCase() === this.state.answer.toLowerCase()){
                indexOfAnswer = index;
            }
        });
>>>>>>> fee73a4f18d8798c33f763fd702687a58c80aea2
        
        while (true){
            const randomNumber = Math.round(Math.random() * 3);
            if (randomNumber !== indexOfAnswer) {
                options.forEach((option, index)=> {
                     if (index === randomNumber) {
                         option.style.visibility = 'hidden';
                     }
                     this.setState(()=>{});
                });
            }
        }
    }
          
    render () {
        const { currentQuestion, currentQuestionIndex, hints, numberOfQuestions } = this.state;
        return(
            <Fragment>
                <Helmet><title>Quiz Page</title></Helmet>
                <Fragment>
                    <audio id="correct-sound" src={correctNotification}></audio>
                    <audio id="wrong-sound" src={wrongNotification}></audio>
                    <audio id="button-sound" src={buttonSound}></audio>
                </Fragment>
                <div className="questions">
                    <div className="lifeline-container">
                        <p>
                    <span className=" mdi-set-center mdi-24px lifeline-icon">Life-Line</span>2
                        </p>
                        <p>
                    <span onClick={this.handleHints} className=" mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon"></span> 
                            <span >{hints}</span>
                        </p>
                    </div>
                
                    <div className="timer-container">
                        <p>
                            <span>{currentQuestionIndex + 1} of {numberOfQuestions}</span>
                            <span className="mdi mdi-clock-outline mdi-24px">Clock will go here</span>
                        </p>
                    </div>

                    <h5>{currentQuestion.question}</h5>
                
                   <div className="options-container">
                        <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionA}</p>
                        <p  onClick={this.handleOptionClick}className="option">{currentQuestion.optionB}</p>
                  </div>

                  <div className="options-container">
                        <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionC}</p>
                        <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionD}</p>
                  </div>
                  <div className="button-container">
                      <button id="previous-button" onClick={this.handleButtonClick}>Previous</button>
                      <button id="next-button"     onClick={this.handleButtonClick}>Next</button>
                      <button id="quit-button"     onClick={this.handleButtonClick}>QuitGame</button>
                  </div>
                </div>
            </Fragment>
           
        );
    }
<<<<<<< HEAD
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
=======
>>>>>>> fee73a4f18d8798c33f763fd702687a58c80aea2
}



export default GamePages;