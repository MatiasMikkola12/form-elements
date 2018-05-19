import React, { Component } from 'react';
import Select from './elements/select';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Everyone hates form-elements. Here is some reset and default styles for them:</h1>
        <Select />

        <input name="name" type="text" />
        <textarea>Some text...</textarea>
        <input type="radio" name="gender" value="male" checked /> Male<br />
        <input type="radio" name="gender" value="female" /> Female<br />
        <input id="checkBox" type="checkbox" /> checkbox
      </div>
    );
  }
}

export default App;
