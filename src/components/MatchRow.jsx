import React from "react";

const MatchRow = (props) => {
    const {team1, team2, time, editMatch, deleteMatch, 
        startMatch, id, status, score1, score2, profile,
        referee, court, showCourt, showReferee} = props;

    const handleEdit = () =>{
        editMatch(id);
    }

    const handleDelete = () => {
        deleteMatch(id);
    }

    const handleTimer = () => {
        startMatch(id);
    }

    return (
        <tr>
            {showCourt && <td>{court}</td>}
            {showReferee && <td>{referee}</td>}
            <td>{team1} X {team2}</td>
            <td>{time}</td>
            <td>
                {status === 'pending' ?
                    <>
                        {
                            profile === "admin" &&
                            <>
                                <i className="material-icons icon-button" onClick={handleEdit}>create</i>
                                <i className="material-icons icon-button" onClick={handleDelete}>delete</i>
                            </>
                        }
                        <i className="material-icons icon-button" onClick={handleTimer}>av_timer</i>
                    </>
                :
                    <span style={{"display":"flex"}}>
                        {status === "complete" ? 
                        <>
                            <h6 className="score-text score-text-complete">{score1} X {score2}</h6>
                        </>
                        : 
                        <>
                            <h6 className="score-text">{score1} X {score2}</h6>
                            <span style={{"background":"#0cf50c", "borderRadius":"0.5rem", "padding":"0.5rem"}}>{status}</span>
                        </>
                        }
                    </span>
                }
            </td>
        </tr>
    );
}

export { MatchRow };