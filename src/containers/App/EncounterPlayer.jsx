/* Utils */
import React, { Component } from "react";
import { Select } from "react-select";

import TurnManager from "../../components/Encounter/TurnManager";
import MonsterSelector from "../../components/Encounter/MonsterSelector";

class EncounterPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: defaultMonsters,
      players: defaultPlayers,
    };
  }

  render() {
    const { all_monsters } = this.props;
    const { monsters, players } = this.state;
    const orders = shuffle(monsters, players);

    return (
      <div>
        <h1>Encounter player</h1>
        <MonsterSelector all_monsters={all_monsters} />
        <TurnManager orders={orders} />
      </div>
    );
  }
}

const defaultMonsters = [
  {
    name: "Aboleth",
  },
  {
    name: "Acolyte",
  },
  {
    name: "Acolyte",
  },
];

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
