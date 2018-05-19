import React, { Component } from 'react';
import './select.css';

class Select extends Component {
  render() {
    return (
      <div className="select-wrapper">
        <select name="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    );
  }
}

export default Select;
