import React, { Component } from "react";
import Questions from "../MadeUp/madeUpQuestions";


class GameContainer extends Component {
    
    startGame = () => {
        console.log(Questions)
    }

    
    render() {
        return (
            <div>
                <button onClick = {this.startGame}> START GAME</button>
            </div>
        )
    }
}


export default GameContainer;