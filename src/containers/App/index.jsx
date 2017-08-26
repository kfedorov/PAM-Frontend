/* Utils */
import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

/* Load data */
import { getSpells, getMonsters } from "../../data/database";

import schema from "../../data/schemas";

/* Components */
import SpellDatabase from "./SpellDatabase";
import MonsterDatabase from "./MonsterDatabase";
import MonsterEditing from "./MonsterEditing";
import EncounterPlayer from "./EncounterPlayer";

/* Style and assets */
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spells: [],
    };
  }

  componentDidMount() {
    this.setState({
      spells: getSpells(),
    });
  }

  render() {
    const { spells, monsters } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <h1>P.A.M</h1>
          <h4>Personal Assistant Minion</h4>
        </div>
        <Tabs onSelect={this.handleMonsterSelect}>
          <TabList>
            <Tab>Spells</Tab>
            <Tab>Monsters</Tab>
            {/* <Tab>Monsters Edit</Tab> */}
            <Tab>Encounter Player</Tab>
          </TabList>
          <TabPanel>
            <SpellDatabase all_spells={spells} />
          </TabPanel>
          <TabPanel>
            <MonsterDatabase />
          </TabPanel>
          {/* <TabPanel>
            <MonsterEditing
              schema={schema.monster}
              uiSchema={schema.uiMonster}
            />
          </TabPanel> */}
          <TabPanel>
            <EncounterPlayer all_monsters={monsters} />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default App;
