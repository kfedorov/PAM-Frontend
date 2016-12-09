import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

// Load data
import { spells, monsters } from '../../data/database';

// Load components
import SpellDatabase from './SpellDatabase'
import LazySpellDatabase from './LazySpellDatabase'

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
            <Tab>Slow</Tab>
            <Tab>Slow</Tab>
            <Tab>Lazy</Tab>
            <Tab>Lazy</Tab>
          </TabList>
          <TabPanel>
            <SpellDatabase all_spells={ spells } />
          </TabPanel>
          <TabPanel>
            <SpellDatabase all_spells={ spells } />
          </TabPanel>
          <TabPanel>
            <LazySpellDatabase all_spells={ spells } />
          </TabPanel>
          <TabPanel>
            <LazySpellDatabase all_spells={ spells } />
          </TabPanel>
        </Tabs>
      </div>
      );
  }
}

export default App;
