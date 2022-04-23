import React from "react";

const MatchRow = (props) => {
    const {team1, team2, time, date, editMatch, deleteMatch, startMatch, id} = props;

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
            <td>{team1}</td>
            <td>{team2}</td>
            <td>{time}</td>
            <td>
                <i className="material-icons icon-button" onClick={handleEdit}>create</i>
                <i className="material-icons icon-button" onClick={handleDelete}>delete</i>
                <i className="material-icons icon-button" onClick={handleTimer}>av_timer</i>
            </td>
        </tr>
    );
}

export { MatchRow };