import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Routes from '../helpers/Routes';
import NavBar from '../components/NavBar';
import Contact from '../views/Contact';

function App() {
  const [admin, setAdmin] = useState(null);
  // const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
        setAdmin(true);
      } else if (admin || admin === null) {
        setAdmin(false);
        // setLoggedInUser(false);
      }
    });
  }, []);

  return (
    <div className='App'>
       <Router>
        <NavBar admin={admin}/>
        <Routes admin={admin}/>
      </Router>
      <Contact/>
    </div>
  );
}

export default App;
