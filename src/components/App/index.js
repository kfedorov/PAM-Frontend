import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SpellComponent from './Spell'
import spells from '../../data/database';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          {spells.map(function(value){
            return <SpellComponent spell={value}></SpellComponent>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
