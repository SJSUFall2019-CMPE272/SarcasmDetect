import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Home from './App.js';
import LogInAuth from './login.js';
import About from './about.js'
import Console from './console.js'
import Dashboard from './dashboard.js';

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

//import { createStore } from 'redux';
//import { Provider } from 'react-redux';
//import rootReducer from './reducers/rootReducer';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//const store = createStore(rootReducer);
//at some point, pass in the reducer in the store.

class YukiRoutes extends React.Component {
  render(){
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={LogInAuth} />
        <Route exact path='/about' component={About} />
        <Route exact path='/console' component={Console} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </Router>
    )
  }
}

ReactDOM.render(

  //<Provider store={store}>
  <YukiRoutes />,
  //</Provider>,
  document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
