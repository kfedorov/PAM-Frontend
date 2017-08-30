import React, { Component } from "react";
import PropTypes from "prop-types";

import { partyType } from "../../type";
import EditableParty from "./EditableParty";

class EditablePartyList extends Component {
  static propTypes = {
    parties: PropTypes.arrayOf(partyType).isRequired,
  };

  render() {
    return (
      <div>
        {this.props.parties.map(party =>
          <EditableParty key={party.id} party={party} />
        )}
      </div>
    );
  }
}

export default EditablePartyList;
