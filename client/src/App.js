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
