import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <h1>Hello!</h1>

        <img src="http://www.fillmurray.com/200/220"/>

        <p>
          I am rather pleased to meet you.
        </p>

        <p>
          I'm your friendly neighborhood Bill Murray!
        </p>

        <p>
          I'm having a good time.
        </p>

        <p>
          I'm going to tell you a secret: I'm about the size of a panther.
        </p>

        <p>
          I'm having a very good time.
        </p>

        <button>
          Say "Hello" to Bill.
        </button>
      </div>
    );
  }
}

export default App;
