import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot, where } from "firebase/firestore";
import { timeStampToTimeString, timeStampToDate } from '../utils/dateTimeFormat';

const getData = (date) => {
    const q = query(collection(db, 'matches'), where('date', '==', date)); //, orderBy('time', 'asc')
    return onSnapshot(q, (querySnapshot) => {
        return querySnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
                ...
                data,
                time: timeStampToTimeString(data.date),
                date: timeStampToDate(data.date)
            };
        });
    });

}

export { getData };