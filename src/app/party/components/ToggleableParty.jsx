import React, { Component } from "react";

import Party from "./Party";
import PartyForm from "./PartyForm";

class EditableParty extends Component {
  state = {
    isOpen: false,
    party: {},
  };

  handleFormSubmit = party => {
    this.props.createParty(party);
    this.setState({ isOpen: false });
  };

  handleCreateParty = () => {
    this.setState({ party: generateParty(), isOpen: true });
  };

  handleCancel = () => {
    this.setState({ isOpen: false });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <PartyForm
          group={this.state.party}
          onCompleteParty={this.handleFormSubmit}
          onCancel={this.handleCancel}
        />
      );
    } else {
      return (
        <div>
          <button onClick={this.handleCreateParty}>Create Party</button>
        </div>
      );
    }
  }
}

function generateParty() {
  return {
    id: Math.floor(Math.random() * 9999999999),
    name: "",
    players: [],
  };
}

export default EditableParty;
