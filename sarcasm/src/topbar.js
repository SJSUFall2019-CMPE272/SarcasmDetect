import React, { useState } from 'react';
import AboutButton from './svg/About.svg';
import About from './about.js';
import LoginButton from './svg/Login.svg';
import ProductButton from './svg/Product.svg';

//import { withRouter } from 'react-router-dom';

import './App.css';

function TopBar(props) {
  return (
    <div className="App">
      <header>
        <div className = "header-buttons">
              <div className = "App-main-about">
                    <a
                      href="/about"
                      //target="_blank"
                      rel="noopener noreferrer"
                    >
                    <img src={AboutButton} alt="logo" />
                    </a>
              </div>
              <div className = "App-main-product">
                    <a
                      href="/"
                      rel="noopener noreferrer"
                      //target="_blank"
                    >
                    <img src={ProductButton} alt="logo" />
                    </a>
              </div>
              <div className="App-main-login">
                  <a href='/login' rel="noopener noreferrer" ><img src={LoginButton} alt="logo" /></a>
              </div>
        </div>
      </header>{' '}
    </div>
  );
}

export default TopBar;
