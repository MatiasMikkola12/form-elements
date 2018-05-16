import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Everyone hates form-elements. Here is some reset and default styles for them:</h1>
        <input name="name" type="text" />
        <select name="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <textarea>Some text...</textarea>
        <input type="radio" name="gender" value="male" checked /> Male<br />
        <input type="radio" name="gender" value="female" /> Female<br />
        <input id="checkBox" type="checkbox" /> checkbox
      </div>
    );
  }
}

export default App;
