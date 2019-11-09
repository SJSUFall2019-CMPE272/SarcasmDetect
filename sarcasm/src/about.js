import React, {Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';
import TopBar from './topbar.js';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class About extends React.Component {

  render(){
    return (
      <div>
        <TopBar/>
        <div>
          <Jumbotron>
            <h1 className="display-3">Yuki Team</h1>
            <p className="lead"></p>
            <hr className="my-2" />
            <p></p>
            <p className="lead">
              {/*<Button color="primary">Learn More</Button>*/}
            </p>
          </Jumbotron>
        </div>
      </div>
    )
  }

}

export default About
