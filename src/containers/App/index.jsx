/* Utils */
import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

/* Load data */
import { getSpells, getMonsters } from '../../data/database';

/* Components */
import SpellDatabase from './SpellDatabase'
import MonsterDatabase from './MonsterDatabase'

/* Style and assets */
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spells: [],
      monsters: []
    };
  }

  componentDidMount() {
    const loadedMonsters = getMonsters()
    const loadedSpells = getSpells()

    Promise.all([loadedMonsters]).then(results => {
      this.setState({
        spells: loadedSpells,
        monsters: results[0]
      })

    }).catch(error => {
      console.log("Error in promise all. " + error)
    })
  }

  render() {
    const {spells, monsters} = this.state

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
