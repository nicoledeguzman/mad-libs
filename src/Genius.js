import firebase from './firebase';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Genius = () => {

    const [ displayedName, setDisplayedName ] = useState('');
    const [ displayedNoun1, setDisplayedNoun1 ] = useState('');
    const [ displayedRapper, setDisplayedRapper ] = useState('');

    useEffect( () => {
        const dbRef = firebase.database().ref('/once-upon');
        dbRef.on('value', snap => {
            snap.forEach ( (childSnap) => {
            const setOfInfo = childSnap.val();
                setDisplayedName(setOfInfo.name);
                setDisplayedNoun1(setOfInfo.noun1);
                setDisplayedRapper(setOfInfo.rapper);
            });
        });
    }, []);

    return (
        <div>
            <h2>A story by <span className="cap">{displayedName}</span></h2>

            <p>Once upon a time, there was a young {displayedNoun1} named {displayedRapper}. <span className="cap">{displayedRapper}</span> loved to drink orange juice, and one day they had uncontrollable farts because of it.</p>

            <Link to='/'>DO IT AGAAAIN</Link>
        </div>
    );

};

export default Genius;