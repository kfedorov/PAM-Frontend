/* Utils */
import React, { Component } from "react";

import EditablePlayerList from "./EditablePlayerList";

class PartyBuilder extends Component {
  state = {
    name: "",
    players: [],
  };

  handleAddPlayer = () => {
    const newPlayer = generatePlayer();
    console.log("Generated player: " + JSON.stringify(newPlayer));
    this.setState({
      players: this.state.players.concat(newPlayer),
    });
  };

  handlePlayerUpdate = updatedPlayer => {
    this.updatePlayer(updatedPlayer);
  };

  updatePlayer = updatedPlayer => {
    console.log("Updated player: " + JSON.stringify(updatedPlayer));
    this.setState({
      players: this.state.players.map(player => {
        if (updatedPlayer.id === player.id) {
          return updatedPlayer;
        } else {
          return player;
        }
      }),
    });
  };

  render() {
    return (
      <div>
        <h1>Party Builder</h1>
        <EditablePlayerList
          players={this.state.players}
          onPlayerUpdate={this.handlePlayerUpdate}
        />
        <button onClick={this.handleAddPlayer}>+</button>
      </div>
    );
  }
}

function generatePlayer() {
  return {
    id: Math.floor(Math.random() * 9999999999),
    name: "",
  };
}

export default PartyBuilder;
