import React, { Component } from "react";



class GameContainer extends Component {
    
    startGame(props){
      return
    }

    
    render() {
        return (
            <div>
              <h2>Question {this.props.current} of {this.props.total}</h2>
              <h1>{this.props.question}</h1>
              <button value={this.props.letter}>
                   <span className="letter">{this.props.letter}.</span>{this.props.answer}
              </button><br></br>
              <button className="btn btn-primary">Confirm and Continue</button>
             
            </div>
        )
    }
}


export default GameContainer;