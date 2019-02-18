import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import Button from '../components/Button';
import '../constants/index';
import { APP_NAME } from '../constants/index';

class App extends Component {

  handleClick = () => {
    console.log("click event");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button 
            onClickFunction = {this.handleClick}
            buttonText = {APP_NAME}
          />
        </header>
      </div>
    );
  }
}

export default App;
