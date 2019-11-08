import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import logo from './svg/YUKI.svg';
import About from './svg/About.svg';
import LogIn from './svg/Login.svg';
import Product from './svg/Product.svg';
import './App.css';

function App(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <header>
        <div className="App-main-about">
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
              <img src={About} className="App-main-about" alt="logo" />
              </a>
        </div>
        <div className="App-main-product">
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
              <img src={Product} className="App-main-product" alt="logo" />
              </a>
        </div>
        <div className="App-main-login">
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
              <img src={LogIn} className="App-main-login" alt="logo" />
              </a>
        </div>
      </header>
      <div className="App-header">
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
              <img src={logo} className="App-logo" alt="logo" />
              </a>
              <p> </p>
              <h2>Yuki provides an overall view of the sarcasm context for products, businesses, personalities, and regions.</h2>
              <h4>Sample case studies:</h4>
              
      </div>

    </div>
  );
}

export default App;
