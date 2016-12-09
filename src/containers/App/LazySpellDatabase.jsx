import React, { Component } from 'react';

import LazySpellsList from '../../components/Spells/LazySpellsList'
import SearchBar from '../../components/Utils/SearchBar'


class LazySpellDatabase extends Component {
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
        <SearchBar searchables={ this.props.all_spells } callback={ this.updateSpells } />
        <LazySpellsList spellsToRender={ this.state.showed_spells } />
      </div>
      );
  }
}

export default LazySpellDatabase;
