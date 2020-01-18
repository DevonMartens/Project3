import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "./pages/GamePages";
import Login from "./pages/LoginPages";
import Profile from "./pages/ProfilePages";
import "./App.css";

function App() {
    return (
      <Router> 
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Login} />
          <Route exact path="/profile" component= {Profile} />
          <Route exact path="/game" component={Game} />
        </div>
      </Router>
    );
  }

export default App;
