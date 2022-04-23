import React from "react";
import { MatchRow } from "./MatchRow";
import { Preloader } from "./Preloader";

const Matches = (props) => {
    const {loading, info, editMatch, deleteMatch, startMatch} = props;

    if (!info.length && info.length !== 0) return (<Preloader />);
    if (info.length === 0) return (<h6>No records</h6>);


    return (
        <>
            {loading ? <Preloader /> :
                <table>
                    <thead>
                        <tr>
                            <th>Team 1</th>
                            <th>Team 2</th>
                            <th>Time</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {info.map(data => <MatchRow key={data.id} {...data} editMatch={editMatch} deleteMatch={deleteMatch} startMatch={startMatch}/>)}
                    </tbody>
                </table>
            }
        </>
    );
}

export {Matches};