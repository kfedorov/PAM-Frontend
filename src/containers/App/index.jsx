/* Utils */
import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

/* Load data */
import { getSpells, getMonsters } from '../../data/database';

import schema from '../../data/schemas'

/* Components */
import SpellDatabase from './SpellDatabase'
import MonsterDatabase from './MonsterDatabase'
import MonsterEditing from './MonsterEditing'

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

  // Little hack to refresh monster
  handleMonsterSelect = (index) => {
    if (index == 1) {
      getMonsters().then(loadedMonster => {
        this.setState({
          monsters: loadedMonster
        })
      }).catch(error => {
        console.log("Error in refresh monster. " + error)
      })
    }
  }

  render() {
    const {spells, monsters} = this.state

    return (

      <div className="App">
        <div className="App-header">
          <h1>P.A.M</h1>
          <h4>Personal Assistant Minion</h4>
        </div>
        <Tabs onSelect={ this.handleMonsterSelect }>
          <TabList>
            <Tab>Spells</Tab>
            <Tab>Monsters</Tab>
            <Tab>Monsters Edit</Tab>
          </TabList>
          <TabPanel>
            <SpellDatabase all_spells={ spells } />
          </TabPanel>
          <TabPanel>
            <MonsterDatabase all_monsters={ monsters } />
          </TabPanel>
          <TabPanel>
            <MonsterEditing schema={ schema.monster } uiSchema={ schema.uiMonster } />
          </TabPanel>
        </Tabs>
      </div>
      );
  }
}

export default App;
