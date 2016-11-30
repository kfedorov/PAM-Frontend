import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import SpellDatabase from './SpellDatabase'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'

import database_spells from '../../data/database';

class App extends Component {

  render() {
    return (

      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Dnd Encounter Helper!</h2>
        </div>

        <Tabs>
          <TabList>
            <Tab>Spells</Tab>
            <Tab>Monsters</Tab>
          </TabList>

          <TabPanel>
            <SpellDatabase all_spells={database_spells}/>
          </TabPanel>
          <TabPanel>
            <SpellDatabase all_spells={database_spells}/>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default App;
