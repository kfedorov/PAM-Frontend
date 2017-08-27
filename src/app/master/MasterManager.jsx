/* Utils */
import React, { Component } from "react";

import { connect } from "react-redux";

import masterModule from "./";

import PartyBuilder from "./components/PartyBuilder";

class MasterManager extends Component {
  render() {
    return (
      <div>
        <PartyBuilder createParty={this.props.createParty} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    master: state[masterModule.constants.NAME],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createParty: (name, players) => {
      dispatch(masterModule.actions.createParty(name, players));
    },

    createEncounter: (name, monsters) => {
      dispatch(masterModule.actions.createEncounter(name, monsters));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MasterManager);
