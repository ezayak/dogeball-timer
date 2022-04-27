import React, { useState, useEffect } from "react";

const Score = (props) => {
    const [score, setScore] = useState();

    const changeScore = (number) => {
        setScore(score + number);
        props.changeScore(score + number, props.teamNumber);
    }

    useEffect(function handleScoreChanges(){
        setScore(props.score);
    },[props.score]);

    return (
        <div className="score">
            <a href="#!" className="waves-effect waves-light-blue btn-flat" onClick={() => changeScore(2)}><i className="material-icons">exposure_plus_2</i></a>
            <a href="#!" className="waves-effect waves-light-blue btn-flat" onClick={() => changeScore(1)}><i className="material-icons">exposure_plus_1</i></a>
            <h5>{score}</h5>
            <a href="#!" className="waves-effect waves-light-blue btn-flat" onClick={() => changeScore(-1)}><i className="material-icons">exposure_neg_1</i></a>
            <a href="#!" className="waves-effect waves-light-blue btn-flat" onClick={() => changeScore(-2)}><i className="material-icons">exposure_neg_2</i></a>
        </div>
    );
}

export { Score };