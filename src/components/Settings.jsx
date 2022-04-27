import React, {useState} from "react";

const Settings = (props) => {
    const [matchTime, setMatchTime] = useState(+props.matchTime);
    const [profile, setProfile] = useState(props.profile);
    const [showCourt, setShowCourt] = useState(props.showCourt);
    const [showReferee, setShowReferee] = useState(props.showReferee);
    const {changeVisibility, onSubmit} = props;

    const handleOnChange = (event) => {
        setMatchTime(event.target.value);
    }

    const handleCheckboxChangeProfile = (event) => {
        setProfile(event.target.checked ? 'admin' : 'referee');
    }

    const handleCheckboxChange = (event) => {
        if (event.target.name === 'showCourt') {
            setShowCourt(!showCourt);
        } else if (event.target.name === 'showReferee') {
            setShowReferee(!showReferee);
        }
    }

    const handleOkButton = () => {
        onSubmit({
            matchTime: matchTime, 
            profile: profile,
            showCourt: showCourt,
            showReferee: showReferee
        });
    }

    return (
        <div className="settings">
            <ul className="collection">
                <li className="collection-item active  blue accent-1 black-text">Settings <span className="right" style={{'cursor': 'pointer'}} onClick={changeVisibility}><i className="material-icons">close</i> </span></li>
                <li className="collection-item">
                    <div className="row">
                        <div className="col s4">
                            <div className="switch">
                                <label>
                                    Referee
                                    <input type="checkbox" checked={profile === "admin"} onChange={handleCheckboxChangeProfile}/>
                                    <span className="lever"></span>
                                    Admin
                                </label>
                            </div> 
                        </div>
                        <div className="col s4">
                            <div className="switch">
                                <label>
                                    Court
                                    <input type="checkbox" name="showCourt" checked={showCourt} onChange={handleCheckboxChange}/>
                                    <span className="lever"></span>
                                </label>
                            </div> 
                        </div>
                        <div className="col s4">
                            <div className="switch">
                                <label>
                                    Referee
                                    <input type="checkbox" name="showReferee" checked={showReferee} onChange={handleCheckboxChange}/>
                                    <span className="lever"></span>
                                </label>
                            </div> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s3">
                            <label htmlFor="matchtime">Match time</label>
                        </div>
                        <div className="input-field col s9">
                            <input type="number" placeholder="Match time" id="matchtime" value={matchTime} onChange={handleOnChange}/>
                        </div>
                    </div>
                </li>
                <li className="collection-item">
                    <button className="waves-effect waves-teal btn-flat" style={{"display":"block", "width": "100%"}} onClick={handleOkButton}>OK</button>
                </li>
            </ul>
        </div>
    );
}

export {Settings};