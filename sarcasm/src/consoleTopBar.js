import React, { useState } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import './App.css';

//import AboutButton from './svg/About.svg';
//import About from './about.js';
//import LoginButton from './svg/Login.svg';
//import ProductButton from './svg/Product.svg';

//import { withRouter } from 'react-router-dom';

//function ConsoleTopBar(props) {

//const ConsoleTopBar = () => {

class ConsoleTopBar extends React.Component {

  render(){
  return (
    <div className="App-console-bar">
      <header>
        <div className = "header-buttons">
              <div className = "console-bar-welcome">
                    <h3>Welcome, Pranav</h3>
              </div>


              {/*
              <div className = "console-bar-welcome">
                    <a
                      href="/console"
                      rel="noopener noreferrer"
                      //target="_blank"
                    >
                    <h3>Welcome, Pranav</h3>
                      {/*Welcome {firebase.auth().currentUser.displayName}
                      Implement redux
                    </a>
              </div>
              <div className="console-bar-logout">
                  <a href='/' rel="noopener noreferrer" ><h3>Logout</h3></a>
              </div>
              */}
        </div>
      </header>{' '}
    </div>
  );
  }
}

export default ConsoleTopBar;
