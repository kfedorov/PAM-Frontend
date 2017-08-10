/* Utils */
import React, { Component } from "react";

import TurnManager from "../../components/Encounter/TurnManager";
import MonsterSelector from "../../components/Encounter/MonsterSelector";
import PlayersSelector from "../../components/Encounter/PlayersSelector";

class EncounterPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      players: [],
    };
  }

  onStart = () => {
    console.log("On click!");
    this.setState({
      monsters: this._monsterSelector.getSelectedMonsters(),
      players: this._playerSelector.getSelectedPlayers(),
    });
  };

  render() {
    const { all_monsters } = this.props;
    const { monsters, players } = this.state;
    const orders = shuffle(monsters, players);
    console.log(JSON.stringify(orders));
    return (
      <div>
        <h1>Encounter player</h1>
        <MonsterSelector
          all_monsters={all_monsters}
          ref={c => (this._monsterSelector = c)}
        />
        <PlayersSelector ref={c => (this._playerSelector = c)} />
        <button onClick={this.onStart}>Start the encounter!</button>
        <TurnManager orders={orders} />
      </div>
    );
  }
}

const defaultPlayers = [
  {
    name: "Telmag",
    initiative: 12,
  },
  {
    name: "Raistlin",
    initiative: 8,
  },
  {
    name: "Algo",
    initiative: 15,
  },
  {
    name: "Paur",
    initiative: 5,
  },
  {
    name: "Kato",
    initiative: 18,
  },
];

function shuffle(monsters, players) {
  monsters = monsters.map(monster => {
    const initiative = Math.ceil(Math.random() * 20);
    return { ...monster, initiative };
  });

  const order = [...monsters, ...players];
  order.sort((a, b) => b.initiative - a.initiative);

  return order;
}

export default EncounterPlayer;
