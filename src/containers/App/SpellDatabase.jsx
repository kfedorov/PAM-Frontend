import React, { Component } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import SpellsList from '../../components/Spells/SpellsList'
import LazySpellsList from '../../components/Spells/LazySpellsList'
import MinimalInfoSpellList from '../../components/Spells/MinimalInfoSpellList'
import ReactListSpellsList from '../../components/Spells/ReactListSpellsList'

import SearchBar from '../../components/Utils/SearchBar'


class SpellDatabase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showed_spells: props.all_spells.slice()
    };

    this.updateSpells = this.updateSpells.bind(this);

  }

  updateSpells(updatedSpells) {
    this.setState({
      showed_spells: updatedSpells
    });
  }

  render() {
    return (
      <div>
        <Tabs>
          <TabList>
            <Tab>Slow</Tab>
            <Tab>Lazy</Tab>
            <Tab>Minimal</Tab>
            <Tab>React-list</Tab>
          </TabList>
          <TabPanel>
            <SpellsList spellsToRender={ this.state.showed_spells } />
          </TabPanel>
          <TabPanel>
            <LazySpellsList spellsToRender={ this.state.showed_spells } />
          </TabPanel>
          <TabPanel>
            <MinimalInfoSpellList spellsToRender={ this.state.showed_spells } />
          </TabPanel>
          <TabPanel>
            <ReactListSpellsList spellsToRender={ this.state.showed_spells } />
          </TabPanel>
        </Tabs>
      </div>
      );
  }
}

export default SpellDatabase;
