/* Utils */
import React from "react";

const Player = ({ player, onEdit }) => {
  return (
    <div>
      <h3>
        {player.name}
      </h3>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
};

export default Player;
