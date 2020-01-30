import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';

const QuizInstructions = () => (
    <Fragment>
        <Helmet><title>Quiz Instructions-Quiz App</title></Helmet>
        <div className="instructions container">
            <h1>Instructions on Playing Game</h1>
            <p>Read Instructions On How to Win !!!!</p>
            <ul className="browser-default" id="main-list">
                <li>Step 1</li>
                <li>Step 2</li>
                <li>Step 3</li>              
            </ul>
            <div>
                <span className="left"><Link to ="/">Return To Home Page</Link></span>
                <span className="right"><Link to ="/play/quiz">Lets Play!</Link></span>

            </div>
        </div>
    </Fragment>
   
);


export default QuizInstructions;