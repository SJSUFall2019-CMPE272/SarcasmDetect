import React from 'react';
import {Button} from 'reactstrap';
import logo from '../../svg/logo.svg';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../../nav/globalNav.js';
import RightSide from '../../components/search/search.js';

import Pranav from '../../svg/Pranav.jpeg';
import Kalyani from '../../svg/Kalyani.jpeg';
import Mukesh from '../../svg/Mukesh.jpeg';
import Kartik from '../../svg/Kartik.png';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const Tweet = (props) => {

  const otherTweets = [
    {
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
      {otherTweets.map((twt, index) =>
        <div>
          <Card>
            <CardImg top width="100%" src={twt.image} alt="Card image cap" />
            <CardBody>
              <CardTitle key={twt.name + "-" + index} >{twt.name}</CardTitle>
              <CardSubtitle>{twt.subtitle}</CardSubtitle>
              <CardText>{twt.text}</CardText>
              <Button color = "secondary" href={twt.github}>Github</Button> {' '}
              <Button color = "primary" href={twt.linkedin}>LinkedIn</Button>
            </CardBody>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Tweet;
