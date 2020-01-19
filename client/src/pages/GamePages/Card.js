import React from "react";
// const styles = {
//     card: {
//         margin: 20,
//         background: "#e8eaf6"
//     },
//     heading: {
//         background: "#3f51b5",
//         fontSize: "14px",
//         color: "black"
//     },
//     content: {
//         padding: 20
//     }
// }
//style={styles.card}
//style={styles.heading}
//style={styles.content}
function Card() {
    return (
        <div className="AnswerBox">
            <h1 className="AnswerHeadline">Answer</h1>
            <div className="AnswerChoices">
                Answer Choice goes here!
            </div>
        </div>
    );
}

export default Card;