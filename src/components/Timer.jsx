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
            timerIsOn: this.props.timerIsOn,
            onChangeStatus: this.props.onChangeStatus
        };
    }

    formatTime = (number) => {
        number = number < 10 ? '0'+number : number;
        return number;
    }

    stopTimer = () => {
         clearInterval(this.timerId);
        this.setState({
            timerIsOn: false
        });
        this.state.onChangeStatus(false, this.props.id, this.state.minutes, this.state.seconds);
    }

    startTimer = () => {
        this.setState({timerIsOn: true});
        this.props.onChangeStatus(true, this.props.id, this.state.minutes, this.state.seconds);

        this.timerId = setInterval(() => {
            let seconds = this.state.seconds;
            let minutes = this.state.minutes;

            if (seconds === 0 && minutes === 0) {
                //stop timer, make alarm
                window.navigator.vibrate(200);
                this.stopTimer();
                return;
            }

            if (seconds === 0) {
                minutes = minutes - 1;
                seconds = 59;
            } else {
                seconds = seconds - 1;
            }

            this.setState({
                seconds: seconds,
                minutes: minutes,
                minutesStr: this.formatTime(minutes),
                secondsStr: this.formatTime(seconds),
            });

            this.state.onChangeStatus(true, this.props.id, minutes, seconds);

        }, 1000);
    }

    resetTimer = () => {
        this.setState({
           seconds : +this.props.seconds,
           minutes: +this.props.minutes,
           minutesStr: this.formatTime(+this.props.minutes),
           secondsStr: this.formatTime(+this.props.seconds)
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.title !== this.props.title) {
            this.setState({title : this.props.title});
            this.stopTimer();
            this.resetTimer();
        }

        if (this.state.timerIsOn !== this.props.timerIsOn) {
            if (this.props.timerIsOn) {
                this.startTimer();
            } else {
                this.stopTimer();
            }
        }

    }

    render() {
        const {minutesStr, secondsStr, title, timerIsOn} = this.state;
        const showStartButton = this.props.showStartButton;

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
                        showStartButton && !timerIsOn  ? 
                            <div className="col s6">
                                <a href="#!" className="waves-effect waves-light-blue btn-flat" onClick={this.startTimer}>Start</a>
                            </div>
                        :
                        showStartButton &&
                            <div className="col s6">
                                <a href="#!" className="waves-effect waves-light-blue btn-flat" onClick={this.stopTimer}>Pause</a>
                            </div>
                    }
                    <div className="col s6">
                        <a href="#!" className="waves-effect waves-light-blue btn-flat" onClick={this.resetTimer}>Reset</a>
                    </div>
                </div>
            </div>
        );
    }
}

export { Timer };