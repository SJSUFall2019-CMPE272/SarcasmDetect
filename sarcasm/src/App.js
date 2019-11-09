import React, { useState } from 'react';
import {Button, Jumbotron } from 'reactstrap';
//import logo from './svg/YUKI.svg';
import logo_black from './svg/YUKI_Black.svg';
import TopBar from './topbar.js';

//import { withRouter } from 'react-router-dom';

import './App.css';

function App(props) {

  return (
    <div className="App">
      <TopBar />
      <div className= "App-header jumbotron-fluid">
        <Jumbotron>
          <h1><img src={logo_black} className="App-logo-black" alt="logo" /></h1>
          <p className="lead">Yuki provides product, sales, and marketing teams an overview of sarcastic social media sentiment surrounding their products, businesses, and key company personnel.</p>
          <hr className="my-2"/>
          <p className = "landing-explain"> Product owners can generate a dashboard of user sarcasm sentiment around the company's product in a region to show other stakeholders and take necessary actions to address the sentiment. </p>
          <p className = "landing-explain"> Marketing teams can use Yuki to adjust ads/outreach campaigns for a product in a region. </p>
          <p className="lead">
            <Button color="primary" href="/login">Sign Up!</Button>
          </p>
        </Jumbotron>
      </div>{' '}

    </div>
  );
}

export default App;
