/* Utils */
import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import schema from "./schemas";

/* Modules */
import Spells from "./spells";
import Monsters from "./monsters";
import Encounter from "./encounter";
import Party from "./party";

/* Style and assets */
import "./App.css";

class App extends Component {
  render() {
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
            <Tab>Monsters Edit</Tab>
            <Tab>Dungeon Master Manager</Tab>
            <Tab>Encounter Player</Tab>
          </TabList>
          <TabPanel>
            <Spells.Database />
          </TabPanel>
          <TabPanel>
            <Monsters.Database />
          </TabPanel>
          <TabPanel>
            <Monsters.Manage
              schema={schema.monster}
              uiSchema={schema.uiMonster}
            />
          </TabPanel>
          <TabPanel>
            <Party.Planner />
          </TabPanel>
          <TabPanel>
            <Encounter.Manager />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default App;
