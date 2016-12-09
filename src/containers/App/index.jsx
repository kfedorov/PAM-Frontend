import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

// Load data
import {spells, monsters} from '../../data/database';

// Load components
import SpellDatabase from './SpellDatabase'
import MonsterDatabase from './MonsterDatabase'

// Import style and assets
import logo from './logo.svg';
import './App.css';


class App extends Component {

  render() {
    return (

      <div className="App">
        <div className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h2>Dnd Encounter Helper!</h2>
        </div>
        <Tabs>
          <TabList>
            <Tab>Spells</Tab>
            <Tab>Monsters</Tab>
          </TabList>
          <TabPanel>
            <SpellDatabase all_spells={ spells } />
          </TabPanel>
          <TabPanel>
            <MonsterDatabase all_monsters={ monsters } />
          </TabPanel>
        </Tabs>
      </div>
      );
  }
}

export default App;
