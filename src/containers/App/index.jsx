import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import SpellsList from '../../components/Spells/SpellsList'
import SearchBar from '../../components/Spells/SearchBar'

import database_spells from '../../data/database';

class App extends Component {
  constructor() {
    super();

    this.state = {
      spells: database_spells.slice()
    };

    this.updateSpells = this.updateSpells.bind(this);

  }

  updateSpells(updatedSpells) {
    this.setState({spells: updatedSpells});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Dnd Encounter Helper!</h2>
        </div>
        <div>
          <SearchBar input={database_spells} callback={this.updateSpells}/>
          <SpellsList spellsToRender={this.state.spells}/>
        </div>
      </div>
    );
  }
}

export default App;
