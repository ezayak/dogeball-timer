import React, { useEffect, useState } from "react";
import { Matches } from "../components/Matches";
import { db } from '../firebase';
import { collection, query, onSnapshot, where, Timestamp, addDoc, setDoc, deleteDoc, doc } from "firebase/firestore";
import { currentDate, timeStampToTimeString, timeStampToDate, stringToTimeStamp } from "../utils/dateTimeFormat";
import { DateInput } from "../components/form/DateInput";
import { MatchInfo } from "../components/MatchInfo";
import { Match } from "../components/Match";
import { Settings } from "../components/Settings";

const Main = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState(currentDate());
    const [matchInfoVisibility, setMatchInfoVisibility] = useState(false);
    const [matchTime, setMatchTime] = useState(10);
    const [matchInfo, setMatchInfo] = useState({
        id: '',
        court: '', 
        date: currentDate(), 
        time: '', 
        team1: '', 
        team2: '', 
        referee: '',
        matchTime: matchTime                        
    });
    const [mode, setMode] = useState('list');
    const [settingsVisibility, setSettingsVisibility] = useState(false);
    const [settings, setSettings] = useState({
        showCourt: false,
        showReferee: false,
        profile: 'referee'
    });

    const compareData = (a, b) => {
        if (a.time === b.time) {
            return a.court - b.court;
        } else {
            return a.time > b.time ? 1 : -1;
        }
    };

    const loadMatches = (newDate) => {
        const q = query(collection(db, 'matches'), where('date', '==', new Timestamp(stringToTimeStamp(newDate), 0))); //, where('date', '==', new Timestamp(stringToTimeStamp(newDate), 0))
        return onSnapshot(q, (querySnapshot) => {
            setLoading(false);
            setMatches([...querySnapshot.docs.map((doc) => {
                const data = doc.data();

                return {
                    ...data,
                    time: timeStampToTimeString(data.time),
                    date: timeStampToDate(data.date)
                };
                }).sort(compareData)
            ]);
        });
    }

    const onDateChange = (newDate) => {
        setDate(newDate);
    };

    const handleMatchInfoVisibility = () => {
        setMatchInfoVisibility(!matchInfoVisibility);
    };

    const handleSettingsVisibility = () => {
        setSettingsVisibility(!settingsVisibility);
    }

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

            setMatchInfo({
                ...element,
                matchTime: matchTime
            });
        } else {
            setMatchInfo({
                id: '',
                court: '', 
                date: currentDate(), 
                time: '', 
                team1: '', 
                team2: '', 
                referee: '',
                matchTime: matchTime                        
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
        setMatchInfo({
            ...element,
            matchTime: matchTime
        });
    }

    const backToList = () => {
        setMode('list');
    }

    const modifyMatch = (record) => {
        setDoc(doc(db, "matches", record.id), {
            ...record
        }, {merge: true});        
    }

    const handleSubmitSettings = (settings) => {
        setMatchTime(settings.matchTime);
        setSettings(settings);
        setSettingsVisibility(!settingsVisibility);
    };

    useEffect(function reloadMatches() {
        setLoading(false);
        loadMatches(date);
        //const unsubscribe = loadMatches(date);

        //return {unsubscribe();};
    },[date]);
    
    return (
        <div className="container content">
            {
                mode === 'list' ? 
                    <>
                        <div style={{"display":"inline-flex", "alignItems": "center"}}>
                            <div style={{"width":"30vh"}}><DateInput label="Date" value={date} onChange={onDateChange}/></div>
                            <button className="waves-effect waves-teal btn-flat"  onClick={handleSettingsVisibility}><i className="material-icons">settings</i></button>
                            {
                            settings.profile === "admin" ?
                                <button className="waves-effect waves-teal btn-flat" onClick={() => {editMatch('')}}><i className="material-icons">add</i></button>
                            :
                                <></>
                            }
                        </div>
                        <Matches info={matches} loading={loading} editMatch={editMatch} deleteMatch={deleteMatch} startMatch={startMatch} {...settings}/>
            
                        {matchInfoVisibility && <MatchInfo changeVisibility={handleMatchInfoVisibility} addMatch={addMatch} {...matchInfo}/>}
                        {settingsVisibility && <Settings  changeVisibility={handleSettingsVisibility} onSubmit={handleSubmitSettings}  {...settings} matchTime={matchTime}/>}

                    </>
                :
                <Match backToList={backToList} modifyMatch={modifyMatch} {...matchInfo}/>
            }
            
        </div>
    );
}

export {Main};