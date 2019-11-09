import React, { useState } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import LogoutButton from './svg/Logout.svg';

//import AboutButton from './svg/About.svg';
//import About from './about.js';
//import LoginButton from './svg/Login.svg';
//import ProductButton from './svg/Product.svg';

//import { withRouter } from 'react-router-dom';

import './App.css';

function DashboardTopBar(props) {

  return (
    <div className="App-console-bar">
      <header>
        <div className = "dashboard-header-buttons">
            <div className = "dashboard-bar">
                <h2>Yuki Analysis Report Dashboard</h2>
            </div>
            <div className = "dashboard-bar-logout">
                <a href='/'> <img src={LogoutButton} alt="logo"/> </a>
            </div>
        </div>
      </header>{' '}
    </div>
  );
}

export default DashboardTopBar;
