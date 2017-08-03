/* Utils */
import React, { Component } from "react";

class TurnManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: props.orders,
    };
  }

  render() {
    return (
      <div>
        <h2>Turn Manager</h2>
        {JSON.stringify(this.state.orders)}
      </div>
    );
  }
}

export default TurnManager;
