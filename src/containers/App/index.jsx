/* Utils */
import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

/* Load data */
import {spells, monsters} from '../../data/database';

/* Components */
import SpellDatabase from './SpellDatabase'
import MonsterDatabase from './MonsterDatabase'

/* Style and assets */
import './App.css';


class App extends Component {

  render() {
    return (

      <div className="App">
        <div className="App-header">
          <h1>Encounter Helper</h1>
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
