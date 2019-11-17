import React, {Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';
import TopBar from './topbar.js';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import './about.css';

import Pranav from './svg/Pranav.jpeg';
import Kalyani from './svg/Kalyani.jpeg';
import Mukesh from './svg/Mukesh.jpeg';
import Kartik from './svg/Kartik.png';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';


const Profile = (props) => {

  const people = [
    {
      name: "Pranav Patil",
      image: Pranav,
      subtitle: "MS Software Engineering",
      text: "Worked on React, Flask server, and ML.",
      github: "https://github.com/pranavpatilsce",
      linkedin: "https://www.linkedin.com/in/pranavrpatil/"
    },{
      name: "Mukesh Mogal",
      image: Mukesh,
      subtitle: "MS Software Engineering",
      text: "Worked on Python backend, AI theory, and ML",
      github: "https://github.com/MukeshMogal",
      linkedin: ""
    },{
      name: "Kalyani Deshmukh",
      image: Kalyani,
      subtitle: "MS Software Engineering",
      text: "Worked on Tableau, Python backend, and ML.",
      github: "https://github.com/kalyanideshmukh11",
      linkedin: ""
    },{
      name: "Kartik Ulmarkar",
      image: Kartik,
      subtitle: "MS Software Engineering",
      text: "Worked on Flask server, Twitter API, and ML.",
      github: "https://github.com/kartiksjsu",
      linkedin: ""
    }
  ]

  return (
    <div>
      {people.map((peop, index) =>
        <div>
          <Card>
            <img width="50%" className="profileImg" src={peop.image}/>
            <CardBody className="profileCardInternal">
              <CardTitle key={peop.name + "-" + index} >{peop.name}</CardTitle>
              <CardSubtitle>{peop.subtitle}</CardSubtitle>
              <CardText>{peop.text}</CardText>
              <Button color = "secondary" href={peop.github}>Github</Button> {' '}
              <Button color = "primary" href={peop.linkedin}>LinkedIn</Button>
            </CardBody>
          </Card>
        </div>
      )}
    </div>
  );
};

class About extends React.Component {

  render(){
    return (
      <div >
        <TopBar/>
        <div className="App-header-about" jumbotron-fluid>
          <Jumbotron>
            <h1 className="display-3">Yuki Team</h1>
            <p className="lead"></p>
            <hr className="my-2" />
            <p></p>
            <p className="lead">
              {/*<Button color="primary">Learn More</Button>*/}
            </p>
            <Profile />
          </Jumbotron>
        </div>

      </div>
    )
  }

}

export default About
