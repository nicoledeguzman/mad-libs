import './App.css';
import firebase from './firebase';
import GeniusPath from './GeniusPath';

import { useState } from 'react';
import { 
  BrowserRouter as Router,
  Link,
  Route 
} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
          <h1>make me the header that you don't want to change</h1>

          <Link to='/geniuspath'>once upon...</Link>
          <Route path='/geniuspath' component={ GeniusPath } />
      </div>
    </Router>
  );
}

export default App;
