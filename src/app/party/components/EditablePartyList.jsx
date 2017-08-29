import React, { Component } from "react";

import EditableParty from "./EditableParty";

class EditablePartyList extends Component {
  render() {
    return (
      <div>
        {this.props.groups.map(group =>
          <EditableParty key={group.id} group={group} />
        )}
      </div>
    );
  }
}

export default EditablePartyList;
