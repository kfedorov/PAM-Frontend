import React, { Component } from "react";

import { partyType } from "../../type";
import Party from "./Party";
import PartyForm from "./PartyForm";

class EditableParty extends Component {
  static propTypes = {
    party: partyType.isRequired,
  };

  state = {
    isEditing: this.props.party.id === 0,
  };

  handlePartyUpdate = party => {
    if (this.props.party.id === 0) {
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
          party={this.props.party}
          onCompleteParty={this.handlePartyUpdate}
        />
      );
    } else {
      return (
        <Party
          party={this.props.party}
          onEdit={() =>
            this.setState({
              isEditing: true,
            })}
        />
      );
    }
  }
}

export default EditableParty;
