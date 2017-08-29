import React, { Component } from "react";

import Party from "./Party";
import PartyForm from "./PartyForm";

class EditableParty extends Component {
  state = {
    isEditing: this.props.group.id === 0,
  };

  handlePartyUpdate = party => {
    if (this.props.group.id === 0) {
      this.props.createParty(party);
    } else {
      this.props.updateParty(party);
    }

    this.setState({ isEditing: false });
  };

  render() {
    if (this.state.isEditing) {
      return (
        <PartyForm
          group={this.props.group}
          onCompleteParty={this.handlePartyUpdate}
        />
      );
    } else {
      return (
        <Party
          group={this.props.group}
          onEdit={this.setState({ isEditing: true })}
        />
      );
    }
  }
}

export default EditableParty;
