/* Utils */
import React, { Component } from "react";
import Select from "react-select";

class MonsterSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMonsters: [],
      monstersToSelect: transformMonster(props.all_monsters),
    };
  }

  onMonsterSelected = monsterValue => {
    this.setState({
      selectedMonsters: [...this.state.selectedMonsters, monsterValue],
    });
  };

  getSelectedMonsters = () => {
    return this.state.selectedMonsters.map(x => {
      return {
        name: x.value,
      };
    });
  };

  render() {
    const { monstersToSelect, selectedMonsters } = this.state;

    return (
      <div>
        <h3>Select your monsters...</h3>
        <Select options={monstersToSelect} onChange={this.onMonsterSelected} />
        <p>
          {JSON.stringify(selectedMonsters)}
        </p>
      </div>
    );
  }
}

function transformMonster(monsters) {
  const selectableMonsters = monsters.map(monster => {
    return {
      value: monster.name,
      label: monster.name,
    };
  });

  return selectableMonsters;
}

export default MonsterSelector;
