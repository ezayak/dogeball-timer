import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            minutes: +props.minutes,
            seconds: +props.seconds,
            minutesStr: this.formatTime(+props.minutes),
            secondsStr: this.formatTime(+props.seconds),
            title: this.props.title,
            timerIsOn: this.props.timerIsOn
        };
    }

    formatTime = (number) => {
        number = number < 10 ? '0'+number : number;
        return number;
    }

    render() {
        const {minutesStr, secondsStr, title, timerIsOn} = this.state;

        return(
            <div className="timer center-align">
                <div className="row">
                    <div className="col s12">
                        <h5>{title}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <h3> {minutesStr} : {secondsStr}</h3>
                    </div>
                </div>
                <div className="row">
                    {
                        !timerIsOn ? 
                            <div className="col s6">
                                <a className="waves-effect waves-light-blue btn-flat">Start</a>
                            </div>
                        :
                        <div className="col s6">
                            <a className="waves-effect waves-light-blue btn-flat">Pause</a>
                        </div>
                    }
                    <div className="col s6">
                        <a className="waves-effect waves-light-blue btn-flat">Reset</a>
                    </div>
                </div>
            </div>
        );
    }
}

export { Timer };