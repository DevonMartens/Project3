import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GameHeader from "./pages/components/GameHeader";
import Game from "./pages/GamePages";
import Login from "./pages/LoginPages";

// import LoginPages from "./pages/LoginPages/LoginPages";

import Nav from "./pages/components/Nav"
import Profile from "./pages/ProfilePages";
import QuizInstructions from "./pages/QuizInstructions";
// kyles
// import QuizInstructions from '../../pages/GamePages/QuizInstructions';
import "./App.css";

function App() {
    return (
      <Router> 
        <div>
        <Nav />
        <GameHeader />
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Login} />p
      
      {/* kyles input  */}
          <Route path="/play/instructions" component={QuizInstructions}></Route>
   
          <Route exact path="/profile" component= {Profile} />
          <Route exact path="/game" component={Game} />
          <GameHeader />
        </div>
      </Router>
    );
  }

export default App;
