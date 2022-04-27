import React from "react";
import { Timer } from "./Timer";
import { Score } from "./Score";

const setMinutesDefault = 3;

class Match extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            backToList: props.backToList,
            modifyMatch: props.modifyMatch,
            team1: props.team1,
            team2: props.team2,
            score1: props.score1,
            score2: props.score2,
            setScore1: 0,
            setScore2: 0,
            setNumber: 1,
            matchHalf: 1,
            titelSet: 'Set #1',
            titleMatchHalf: 'Match 1st half',
            setTimerOn: false,
            matchTimerOn: false,
            setMinutes: this.getSetMinutes(props.matchTime, 0),
            setSeconds: 0,
            matchMinutes: props.matchTime,
            matchSeconds: 0,
            matchIsOn: false,
            matchIsPaused: true
        };
    }

    changeScore = (score, teamNumber) => {
        if (teamNumber === "1") {
            this.setState({setScore1 : score});
        } else {
            this.setState({setScore2 : score});
        }
    }

    onChangeTimerStatusSet = (status, id, minutes, seconds) => {
        this.setState({
            setTimerOn: status,
            setMinutes: minutes,
            setSeconds: seconds
        });
    }

    onChangeTimerStatusMatch = (status, id, minutes, seconds) => {
        this.setState({
            matchTimerOn: status,
            matchMinutes: minutes,
            matchSeconds: seconds
        });
    }

    getSetMinutes = (minutes, seconds) => {
        return minutes <= 1 && seconds >= 20 ? 1 : Math.min(minutes, setMinutesDefault);
    }

    getSetSeconds = (minutes, seconds) => {
        return minutes < 1 && seconds > 20 ? 30 : 
                minutes < setMinutesDefault ? seconds : 0;
    }

    handleAddScore = () => {
        this.state.modifyMatch({
            score1: this.state.score1 + this.state.setScore1,
            score2: this.state.score2 + this.state.setScore2,
            id: this.props.id
        });
        const setNumber = this.state.setNumber + 1;
        this.setState({
            score1: this.state.score1 + this.state.setScore1, 
            score2: this.state.score2 + this.state.setScore2,
            setScore1: 0,
            setScore2: 0,
            setNumber: setNumber,
            titelSet: 'Set #'+ setNumber,
            titleMatchHalf: this.state.matchMinutes === 0 && this.state.matchSeconds < 20 ? 'Match 2nd half' : 'Match 1st half',
            setMinutes: this.getSetMinutes(this.state.matchMinutes,this.state.matchSeconds),
            setSeconds: this.getSetSeconds(this.state.matchMinutes,this.state.matchSeconds),
            matchMinutes: this.state.matchMinutes === 0 && this.state.matchSeconds < 20 ? this.props.matchTime : this.state.matchMinutes,
            matchSeconds: this.state.matchMinutes === 0 && this.state.matchSeconds < 20 ? 0 : this.state.matchSeconds,
        });
    }

    startMatch = () => {
        this.state.modifyMatch({
            id: this.props.id,
            status: 'online'
        });
        this.setState({
            setTimerOn: true,
            matchTimerOn: true,
            matchIsOn: true,
            matchIsPaused: false
        });
    };

    stopMatch = () => {
        this.state.modifyMatch({
            id: this.props.id,
            status: 'paused',
            matchIsPaused: true
        });
        this.setState({
            setTimerOn: false,
            matchTimerOn: false,
            matchIsPaused: true
        });
    }

    endMatch = () => {
        this.state.modifyMatch({
            id: this.props.id,
            status: 'complete',
            matchIsPaused: true,
            matchIsOn: false
        });
        this.state.backToList();
    }

    backToList = () => {
        this.state.backToList();
    }

    render() {
        const {team1, team2, score1, score2, titelSet, 
            titleMatchHalf, setScore1, setScore2, setTimerOn, 
            matchTimerOn, setMinutes, setSeconds, matchMinutes, matchSeconds,
            matchIsPaused, matchIsOn} = this.state;
        const variableFalse = false;

        return (
            <>
                <div className="row blue lighten-5" style={{'margin': '0'}}>
                    <div className="col s5 center-align"><h5>{team1}</h5></div>
                    <div className="col s2 center-align"><h5>X</h5></div>
                    <div className="col s5 center-align"><h5>{team2}</h5></div>
                </div>
                <div className="row yellow lighten-5">
                    <div className="col s5 center-align"><h5>{score1}</h5></div>
                    <div className="col s2 center-align"></div>
                    <div className="col s5 center-align"><h5>{score2}</h5></div>
                </div>
                <div className="center-align">
                    {matchIsPaused && <a href="#!" className="waves-effect waves-light-blue btn-flat btn-large" onClick={this.startMatch}>Start <i className="material-icons left">play_arrow</i></a>}
                    {!matchIsPaused && <a href="#!" className="waves-effect waves-light-blue btn-flat btn-large" onClick={this.stopMatch}>Pause <i className="material-icons left">pause</i> </a>}                    
                    {!matchIsOn && <a href="#!" className="waves-effect waves-light-blue btn-flat btn-large" onClick={this.backToList}>Back <i className="material-icons left">arrow_back</i></a>}
                    {matchIsOn && <a href="#!" className="waves-effect waves-light-blue btn-flat btn-large" onClick={this.endMatch}>End match <i className="material-icons left">stop</i></a>}
                </div>
                <div className="row">
                    <div className="col s6 center-align">
                        <Timer minutes={matchMinutes} seconds={matchSeconds} title={titleMatchHalf} timerIsOn={matchTimerOn} onChangeStatus={this.onChangeTimerStatusMatch} id="match" showStartButton={variableFalse}/>
                    </div>
                    <div className="col s6 center-align">
                        <Timer minutes={setMinutes} seconds={setSeconds} title={titelSet} timerIsOn={setTimerOn} onChangeStatus={this.onChangeTimerStatusSet} id="set" showStartButton={!matchIsPaused}/>
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