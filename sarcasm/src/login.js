import React, {Component} from 'react';
import {Button} from 'reactstrap';
import TopBar from './topbar.js';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// const LogIn = (props) => {


firebase.initializeApp({
  apiKey: "AIzaSyDFjlTD97k-lLCR_nVNITQ0sxnYSH5Kokw",
  authDomain: "yukifirebaseauth.firebaseapp.com"
})

class LogInAuth extends React.Component {

  state = {isSignedIn: false}

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user})
      console.log("user", user)
    })
  }

  render(){
  return (
      <div>
        <TopBar/>
        <div className="App-login">
              {/*<h1 className="display-5">Yuki Login</h1>*/}
              {this.state.isSignedIn ?
              (
              <div className="header-buttons">
                  <div>
                    <h1 className="display-4">Welcome {firebase.auth().currentUser.displayName}</h1>
                    <img alt="profile picture" src={firebase.auth().currentUser.photoURL} />
                  </div>
                  <div className="login-signout">
                    <Button onClick={() => firebase.auth().signOut()}>Sign out!</Button>
                  </div>
                  <div className="login-next">
                    <Button href='/console'>Go To Yuki Console</Button>
                  </div>
              </div>
              )
              :
              (
                <div>
                  <h5 className="display-5">Login with your preferred method!</h5>
                  <StyledFirebaseAuth
                    uiConfig={this.uiConfig}
                    firebaseAuth={firebase.auth()}
                  />
                </div>
              )
              }
        </div>
      </div>
  )
  }
}

export default LogInAuth
