import firebase from './firebase';
import { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import Genius from './Genius';

const GeniusPath = () => {

    // state for the user's inputs
  const [ name, setName ] = useState('')
  const [ noun1, setNoun1 ] = useState('')
  const [ rapper, setRapper ] = useState('')

  // handler for name
  const handleName = (e) => {
    setName(e.target.value);
  }
  // handler for noun
  const handleNoun1 = (e) => {
    setNoun1(e.target.value);
  }
  // handler for rapper name
  const handleRapper = (e) => {
    setRapper(e.target.value);
  }

  // handler for submit
  const submitChange = (e) => {
    e.preventDefault();
    setName('');
    setNoun1('');

    const dbRef = firebase.database().ref('/once-upon');
    const newUser = {
      name: name,
      noun1: noun1,
      rapper: rapper
    };
    dbRef.push(newUser);
  }



  return (
      <div>
          <form onSubmit={submitChange}>
              <label htmlFor="newName">Please enter your name:</label>
              <input
                type="text"
                id="newName"
                value={name}
                onChange={handleName}
                required
              />

              <label htmlFor="noun1">
                noun
              </label>
              <input
                type="text"
                id="noun1"
                value={noun1}
                onChange={handleNoun1}
                required
              />

              <label htmlFor="rapper">
                rapper
              </label>
              <input
                type="text"
                id="rapper"
                value={rapper}
                onChange={handleRapper}
                required
              />

              <button type="submit">
                make it
              </button>
            </form>

            <Link to="/geniuspath/genius">i hold your story</Link>

            <Route path='/geniuspath/genius' component={ Genius } />
      </div>
  )

}

export default GeniusPath;