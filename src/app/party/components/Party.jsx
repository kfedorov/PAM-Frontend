/* Utils */
import React, { Component } from "react";

import GroupList from "./EditablePlayer";

class Tavern extends Component {
  render() {
    const { group } = this.props;
    return (
      <div>
        <h3>
          {group.name}
        </h3>
        <p>
          {group.players.map(player =>
            <p>
              {player.name}
            </p>
          )}
        </p>
      </div>
    );
  }
}

export default Tavern;
