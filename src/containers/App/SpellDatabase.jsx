/* Utils */
import React, { Component } from 'react';

/* Components */
import SpellsList from '../../components/Spells/SpellsList'
import SearchBar from '../../components/Utils/SearchBar'


class SpellDatabase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showed_spells: props.all_spells.slice()
    };

    this.updateSpells = this.updateSpells.bind(this);
  }

  componentWillReceiveProps = (nextProps) => {

    const {all_spells} = nextProps;

    this.setState({
      showed_spells : all_spells
    });
  }

  updateSpells(updatedSpells) {
    this.setState({
      showed_spells: updatedSpells
    });
  }

  render() {

    const {all_spells} = this.props;

    return (
      <div>
        <SearchBar searchables={ all_spells } callback={ this.updateSpells } />
        <SpellsList spellsToRender={ this.state.showed_spells } />
      </div>
      );
  }
}

export default SpellDatabase;
