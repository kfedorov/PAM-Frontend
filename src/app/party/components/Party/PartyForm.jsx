/* Utils */
import React, { Component } from "react";

import { partyType } from "../../type";
import PartyMetaForm from "./PartyMetaForm";
import EditablePlayerList from "../Player/EditablePlayerList";

class PartyForm extends Component {
  static propTypes = {
    party: partyType.isRequired,
  };

  state = {
    name: this.props.party.name,
    players: this.props.party.players,
  };

  handleMetaChange = meta => {
    this.setState({ name: meta.name });
  };

  handleAddPlayer = () => {
    const newPlayer = generatePlayer();
    this.setState({
      players: this.state.players.concat(newPlayer),
    });
  };

  handlePlayerUpdate = updatedPlayer => {
    this.updatePlayer(updatedPlayer);
  };

  updatePlayer = updatedPlayer => {
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

  handleCompleteParty = () => {
    const party = this.state;
    this.props.onCompleteParty({
      id: this.props.party.id,
      name: party.name,
      players: party.players,
    });
  };

  handleCancel = () => {
    this.props.onCancel();
  };

  render() {
    return (
      <div>
        <PartyMetaForm
          name={this.state.name}
          onMetaChange={this.handleMetaChange}
        />
        <EditablePlayerList
          players={this.state.players}
          onPlayerUpdate={this.handlePlayerUpdate}
        />
        <button onClick={this.handleAddPlayer}>Add Player</button>
        <button onClick={this.handleCompleteParty}>Complete party</button>
        <button onClick={this.handleCancel}>Cancel</button>
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

export default PartyForm;
