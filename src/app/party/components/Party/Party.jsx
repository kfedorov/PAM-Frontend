/* Utils */
import React, { Component } from "react";

import { partyType } from "../../type";

class Party extends Component {
  static propTypes = {
    party: partyType.isRequired,
  };

  render() {
    const { party } = this.props;
    return (
      <div>
        <h3>
          {party.name}
        </h3>
        <div>
          {party.players.map(player =>
            <p key={player.id}>
              {player.name}
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default Party;
