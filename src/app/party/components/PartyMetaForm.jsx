import React, { Component } from "react";

class PartyMetaForm extends Component {
  handleNameChange = e => {
    this.props.onMetaChange({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="name"
          value={this.props.name}
          onChange={this.handleNameChange}
        />
      </div>
    );
  }
}

export default PartyMetaForm;
