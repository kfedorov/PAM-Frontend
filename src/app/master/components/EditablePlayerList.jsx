/* Utils */
import React, { Component } from "react";

import EditablePlayer from "./EditablePlayer";

class EditablePlayerList extends Component {
  render() {
    const players = this.props.players.map(player =>
      <EditablePlayer
        key={player.id}
        player={player}
        onPlayerUpdate={this.props.onPlayerUpdate}
      />
    );

    return (
      <div>
        {players}
      </div>
    );
  }
}

export default EditablePlayerList;
