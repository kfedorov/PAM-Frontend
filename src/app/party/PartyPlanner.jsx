/* Utils */
import React, { Component } from "react";

import { connect } from "react-redux";

import partyModule from "./";

import EditablePartyList from "./components/EditablePartyList";
import ToggleableParty from "./components/ToggleableParty";

class MasterManager extends Component {
  handleCreateParty = () => {
    const generatedParty = generateParty();
    this.props.createParty(generatedParty);
  };

  render() {
    return (
      <div>
        <h1>Tavern</h1>
        <EditablePartyList groups={this.props.party.groups} />
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

function generateParty() {
  return {
    id: Math.floor(Math.random() * 9999999999),
    name: "",
    players: [],
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MasterManager);
