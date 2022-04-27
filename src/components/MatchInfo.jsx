import React from "react";

class MatchInfo extends React.Component {
    constructor (props) {
        super(props);

        this.state =  {
            id: props.id,
            court: props.court, 
            date: props.date, 
            time: props.time, 
            team1: props.team1, 
            team2: props.team2, 
            referee: props.referee,
            changeVisibility: props.changeVisibility,
            addMatch: props.addMatch
        };
    }

    handleAddButton = () => {
        this.state.addMatch({
            court: this.state.court,
            date: this.state.date,
            time: this.state.time,
            team1: this.state.team1,
            team2: this.state.team2,
            referee: this.state.referee,
            id: this.state.id
        });
        this.state.changeVisibility();
    }

    handleOnChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    render() {
        const {changeVisibility, court, date, time, team1, team2, referee} = this.state;

        return (
            <div className="new-match">
                <ul className="collection">
                    <li className="collection-item active  blue accent-1 black-text">New Match <span className="right" style={{'cursor': 'pointer'}} onClick={changeVisibility}><i className="material-icons">close</i> </span></li>
                    <li className="collection-item">
                        <div className="row">
                            <div className="input-field col s12 m6">
                                <input placeholder="Court" id="court" type="text" className="validate" value={court} onChange={this.handleOnChange}/>
                            </div>
                            <div className="input-field col m3 s12">
                                <input placeholder="Date" id="date" type="date" className="validate" value={date} onChange={this.handleOnChange} />
                            </div>
                            <div className="input-field col m3 s12">
                                <input placeholder="Time" id="time" type="time" className="validate" value={time} onChange={this.handleOnChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="Referee" id="referee" type="text" className="validate" value={referee} onChange={this.handleOnChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="Team 1" id="team1" type="text" className="validate" value={team1} onChange={this.handleOnChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="Team 2" id="team2" type="text" className="validate" value={team2} onChange={this.handleOnChange}/>
                            </div>
                        </div>
                    </li>
                    <li className="collection-item">
                        <button className="waves-effect waves-teal btn-flat" style={{"display":"block", "width": "100%"}} onClick={this.handleAddButton}>Save</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export { MatchInfo };