import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Game from "./pages/GamePages";
 import LoginPages from "./pages/LoginPages";
// import Profile from "./pages/ProfilePages";
import "./App.css";
import "./pages/LoginPages/LoginPages";
// import GamePages from "./pages/GamePages";
// import Card from "./pages/GamePages/Card";
// import Question from "./pages/GamePages/Question";

function App() {
    return (
      // <Router> 
      //   <div>
      //     <Route exact path="/" component={Login} />
      //     <Route exact path="/home" component={Login} />
      //     <Route exact path="/profile" component= {Profile} />
      //     <Route exact path="/game" component={Game} />
      //   </div>
      // <GamePages />
      // <Question />
      // <Card />
      // <Card />
      // <Card />
      // <Card />
      // </Router>
      <div>
      <LoginPages />
    </div>
    );
  }

export default App;
/*          </div>
          <div className="outter-container">
          <div className="header">
            Register
          </div>
          <div className="Registration-box">
            <div className="input-group">
              <p htmlFor="github-email">Enter email associated with your Github</p>
            <label htmlFor="Email">Github Email</label>
            <input
                type="text"
                name="Email"
                className="login-input"
                placeholder="Github Email"/>
            </div>
            <div className="input-group">
              <p className="register-username">Enter your character's name</p>
              <label htmlFor="register-username">Username</label>
              <input
                type="text"
                name="Character's Name"
                className="login-input"
                placeholder="Character's name"/>
            </div>
            <div className="input-group">
              <p className="register-password">Create a password</p>
              <label htmlFor="register-password">Password</label>
              <input
                type="password"
                name="register-password"
                className="register-password"
                placeholder="Register password"/>
            </div>
          </div>
          </div>
        </div>*/