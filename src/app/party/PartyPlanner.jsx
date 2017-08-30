/* Utils */
import React, { Component } from "react";

import { connect } from "react-redux";

import partyModule from "./";

import EditablePartyList from "./components/Party/EditablePartyList";
import ToggleableParty from "./components/Party/ToggleableParty";

class MasterManager extends Component {
  render() {
    return (
      <div>
        <h1>Tavern</h1>
        <EditablePartyList parties={this.props.party.groups} />
        <ToggleableParty createParty={this.props.createParty} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { party: state[partyModule.store.NAME] };
};

const mapDispatchToProps = dispatch => {
  return {
    createParty: party => {
      dispatch(partyModule.store.createParty(party));
    },
    updateParty: party => {
      dispatch(partyModule.store.createParty(party));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MasterManager);
