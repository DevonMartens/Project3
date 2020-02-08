import React from "react";
import "./style.css";
import gameUser
// require('dotenv').config()
// import GITHUB from '../../config';
const keys = require('../../config').clientID;

// import GameHeader from "../components/GameHeader";
const url = 'https://github.com/login/oauth/authorize?client_id=' + keys;



function LoginPages() {
  // return (
  //   <div>
  //     <h1>Hey There!!</h1>
  //   </div>
  // ************************ ADD THE HEADER DIV AND NAVIGATION DIV *******************************
  // );
      return (
        <div className="inner-container">
          <div className="header">
            <h1 className="game-intro">Sign In or Register your account</h1>
          
              <button className="sugnin-btn" type="submit" id="github">
                <a href = {url}>Sign in With Github</a>
                </button>      
                </div>
          </div>
         
      );
    }

export default LoginPages;