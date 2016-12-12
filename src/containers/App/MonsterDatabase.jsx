/* Utils */
import React, { Component } from 'react';

/* Components */
import SearchBar from '../../components/Utils/SearchBar'
import MonstersList from '../../components/Monsters/MonstersList'



class SpellDatabase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showed_monsters: props.all_monsters.slice()
    };

    this.updateMonsters = this.updateMonsters.bind(this);

  }

  updateMonsters(updatedSpells) {
    this.setState({
      showed_monsters: updatedSpells
    });
  }

  render() {
    return (
      <div>
        <SearchBar searchables={ this.props.all_monsters } callback={ this.updateMonsters } />
        <MonstersList monstersToRender={ this.state.showed_monsters } />
      </div>
      );
  }
}

export default SpellDatabase;
