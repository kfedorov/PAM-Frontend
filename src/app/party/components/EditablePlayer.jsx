import React, { Component } from "react";

import Player from "./Player";
import PlayerForm from "./PlayerForm";

class EditablePlayer extends Component {
  state = {
    isEditing: this.props.player.name === "" ? true : false,
  };

  handleUpdate = player => {
    this.props.onPlayerUpdate(player);
    this.setState({ isEditing: false });
  };

  handleFormClose = () => {
    this.setState({ isEditing: false });
  };

  render() {
    if (this.state.isEditing) {
      return (
        <PlayerForm
          player={this.props.player}
          onFormSubmit={this.handleUpdate}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <Player
          player={this.props.player}
          onEdit={() => this.setState({ isEditing: true })}
        />
      );
    }
  }
}

export default EditablePlayer;
