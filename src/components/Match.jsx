import React from "react";
import { Timer } from "./Timer";
import { Score } from "./Score";

class Match extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stopMatch: props.stopMatch,
            addScore: props.addScore,
            team1: props.team1,
            team2: props.team2,
            score1: props.score1,
            score2: props.score2,
            setScore1: 0,
            setScore2: 0,
            setNumber: 1,
            matchHalf: 1,
            titelSet: 'Set #1',
            titleMatchHalf: 'Match 1st half'
        };
    }

    changeScore = (score, teamNumber) => {
        if (teamNumber === "1") {
            this.setState({setScore1 : score});
        } else {
            this.setState({setScore2 : score});
        }
    }

    handleAddScore = () => {
        this.state.addScore(this.state.score1, this.state.score2);
        const setNumber = this.state.setNumber + 1;
        this.setState({
            setNumber: this.setNumber + 1, 
            score1: this.state.score1 + this.state.setScore1, 
            score2: this.state.score2 + this.state.setScore2,
            setScore1: 0,
            setScore2: 0,
            setNumber: setNumber,
            titelSet: 'Set #'+ setNumber,
        });
    }

    render() {
        const {stopMatch, team1, team2, score1, score2, titelSet, titleMatchHalf, setScore1, setScore2} = this.state;
        console.log(this.state);

        return (
            <>
                <div className="row blue lighten-5" style={{'margin': '0'}}>
                    <div className="col s5 center-align"><h5>{team1}</h5></div>
                    <div className="col s2 center-align"><h5>X</h5></div>
                    <div className="col s5 center-align"><h5>{team2}</h5></div>
                </div>
                <div className="row yellow lighten-5">
                    <div className="col s5 center-align"><h5>{score1}</h5></div>
                    <div className="col s2 center-align"><h5></h5></div>
                    <div className="col s5 center-align"><h5>{score2}</h5></div>
                </div>
                <div className="center-align">
                    <a className="waves-effect waves-light-blue btn-flat btn-large" onClick={stopMatch}>Stop <i className="material-icons left">stop</i></a>
                    <a className="waves-effect waves-light-blue btn-flat btn-large" onClick={stopMatch}>Start <i className="material-icons left">play_arrow</i></a>
                    <a className="waves-effect waves-light-blue btn-flat btn-large" onClick={stopMatch}>Pause <i className="material-icons left">pause</i> </a>
                </div>
                <div className="row">
                    <div className="col s6 center-align">
                        <Timer minutes="10" seconds="0" title={titleMatchHalf} timerIsOn={false}/>
                    </div>
                    <div className="col s6 center-align">
                        <Timer minutes="3" seconds="0" title={titelSet} timerIsOn={false}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 center-align"><h6>SET SCORE</h6></div>
                </div>
                <div className="row">
                    <div className="col s6 center-align">
                        <Score changeScore={this.changeScore} teamNumber="1" score={setScore1}/>
                    </div>
                    <div className="col s6 center-align">
                        <Score changeScore={this.changeScore} teamNumber="2" score={setScore2} />
                    </div>
                </div>
                <button className="waves-effect waves-light-blue btn-flat" style={{"width":"100%"}} onClick={this.handleAddScore}>Add score</button>
            </>
        );
    }
}

export { Match };