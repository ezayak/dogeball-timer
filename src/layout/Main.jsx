import React, { useEffect, useState } from "react";
import { Matches } from "../components/Matches";
import { db } from '../firebase';
import { collection, query, onSnapshot, where, Timestamp, addDoc, setDoc, deleteDoc, doc } from "firebase/firestore";
import { currentDate, timeStampToTimeString, timeStampToDate, stringToTimeStamp } from "../utils/dateTimeFormat";
import { DateInput } from "../components/form/DateInput";
import { MatchInfo } from "../components/MatchInfo";
import { Match } from "../components/Match";

const Main = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState(currentDate());
    const [MatchInfoVisibility, setMatchInfoVisibility] = useState(false);
    const [matchInfo, setMatchInfo] = useState({
        id: '',
        court: '', 
        date: currentDate(), 
        time: '', 
        team1: '', 
        team2: '', 
        referee: ''                        
    });
    const [mode, setMode] = useState('list');

    const loadMatches = (newDate) => {
        const q = query(collection(db, 'matches'), where('date', '==', new Timestamp(stringToTimeStamp(newDate), 0))); //, where('date', '==', new Timestamp(stringToTimeStamp(newDate), 0))
        return onSnapshot(q, (querySnapshot) => {
            setLoading(false);
            setMatches([...querySnapshot.docs.map((doc) => {
                const data = doc.data();

                return {
                    ...
                    data,
                    time: timeStampToTimeString(data.time),
                    date: timeStampToDate(data.date)
                };
            })]);
        });
    }

    const onDateChange = (newDate) => {
        setDate(newDate);
    };

    const handleMatchInfoVisibility = () => {
        setMatchInfoVisibility(!MatchInfoVisibility);
    };

    const addMatch = async (record) => {
        let id = '';

        if (record.id === '') {
            const docRef = await addDoc(collection(db, 'matches'), {
                ...record,
                date: Timestamp.fromDate(new Date(record.date)),
                time: Timestamp.fromDate(new Date(record.date + ' ' + record.time)),
                id: record.date + ' ' + record.time,
            });

            id = docRef.id;
        } else {
            id = record.id;
        }
        
        setDoc(doc(db, "matches", id), {
            ...record,
            date: Timestamp.fromDate(new Date(record.date)),
            time: Timestamp.fromDate(new Date(record.date + ' ' + record.time)),
            score1: 0,
            score2: 0,
            status: 'pending',
            id: id
        });
    }

    const editMatch = (id) => {
        if (id !== '') {
            const element = matches.find((element) => {
                return element.id === id;
            });

            setMatchInfo({...element});
        } else {
            setMatchInfo({
                id: '',
                court: '', 
                date: currentDate(), 
                time: '', 
                team1: '', 
                team2: '', 
                referee: ''                        
            });
        }

        handleMatchInfoVisibility();
    }

    const deleteMatch = async (id) => {
        await deleteDoc(doc(db, "matches", id));
    }

    const startMatch = (id) => {
        setMode('match');
        const element = matches.find((element) => {
            return element.id === id;
        });
        setMatchInfo({...element});
    }

    const stopMatch = () => {
        setMode('list');
    }

    const addScore = () => {
        
    }

    useEffect(function reloadMatches() {
        setLoading(false);
        const unsubscribe = loadMatches(date);

        //return {unsubscribe();};
    },[date]);
    
    return (
        <div className="container content">
            {
                mode === 'list' ? 
                    <>
                        <div style={{"display":"grid"}}>
                            <DateInput label="Date" value={date} onChange={onDateChange}/>
                            <button className="waves-effect waves-teal btn-flat" onClick={() => {editMatch('')}}>Add match</button>
                        </div>
                        <Matches info={matches} loading={loading} editMatch={editMatch} deleteMatch={deleteMatch} startMatch={startMatch}/>
            
                        {MatchInfoVisibility && <MatchInfo changeVisibility={handleMatchInfoVisibility} addMatch={addMatch} {...matchInfo}/>}
                    </>
                :
                <Match stopMatch={stopMatch} addScore={addScore} {...matchInfo}/>
            }
            
        </div>
    );
}

export {Main};