import React, {Component} from 'react';
import { useState } from 'react';
import {Button} from 'reactstrap';
import ConsoleTopBar from './consoleTopBar.js';
import { Alert, Col, Row, Form, Fade, FormGroup, Label, Input } from 'reactstrap';

const Info = (props) => {
    const [fadeIn, setFadeIn] = useState(false);

    const toggle = () => setFadeIn(!fadeIn);

    return (
        <div>
            <Button color="primary" onClick={toggle}>Example Input</Button>
            <Fade in={fadeIn} tag="h5" className="mt-3">
                <p className = "lead"> Example: Trump, Washington DC, Facebook, Ads (separated by commas). Yuki can look for Name, Place, Company, and Product to analyze for sarcasm sentiment. </p>
                <p className = "landing-explain-console"> Disclaimer: The scale of analysis may be limited for public API based products like Yuki due to data privacy laws. </p>
            </Fade>
        </div>
    );
}

//class Console extends React.Component{
const Console = () => {

  const [trends, setTrend] = useState('');

    return(
        <div>
          <ConsoleTopBar/>
          <div className="console-entry">
             <Form className="console-form"> {/*method="POST"*/}
                {/*<FormGroup>
                  <Label for="exampleAddress">Address</Label>
                  <Input type="text" placeholder="Which Twitter trend do you want to analyze?"/>
                </FormGroup>*/}
                <FormGroup>
                  {/*<Label for="exampleAddress">Address</Label>*/}
                  <Input type="text" value={trends} placeholder="What would you like Yuki to analyze?" onChange={e => setTrend(e.target.value)}/>

                </FormGroup>

                <div className="analyze">
                {' '}
                <Button color="success" type="submit" href="/dashboard" onClick={async ()  => {
                  const sending = {trends};
                  const response = await fetch('/analyze', {
                    method: 'POST',
                    headers: {
                      'Content-type': 'application/json'
                    },
                    body: JSON.stringify(trends)
                  })
                  if(response.ok){
                    console.log("worked");
                  }
                }}
                >Analyze!</Button> {/*/dashboard*/}
                </div>

             </Form>
             <Info />
          </div>
        </div>
    )
}

export default Console;
