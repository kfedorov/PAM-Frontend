/* Utils */
import React, { Component } from "react";

class PlayerForm extends Component {
  state = {
    name: this.props.player.name,
  };

  handleSubmit = () => {
    this.props.onFormSubmit({
      id: this.props.player.id,
      name: this.state.name,
    });
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <button onClick={this.handleSubmit}>Update</button>
        <button onClick={this.props.onFormClose}>Cancel</button>
      </div>
    );
  }
}

export default PlayerForm;
