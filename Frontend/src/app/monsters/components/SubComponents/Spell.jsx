/* Utils */
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

import SpellModule from "../../../spells";

import { connect } from "react-redux";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

class Spell extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  get_spell_component() {
    const spell = this.props.all_spells.find(
      x => x.name.toLowerCase().trim() == this.props.name.toLowerCase().trim()
    );
    return <SpellModule.components.SpellInfo spellToRender={spell} />;
  }

  render() {
    return (
      <span>
        <span onClick={this.openModal}>
          {this.props.name}
        </span>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {this.get_spell_component()}
        </Modal>
      </span>
    );
  }
}

const mapStateToProps = state => {
  return {
    all_spells: state[SpellModule.constants.NAME],
  };
};

const ConnectedSpell = connect(mapStateToProps)(Spell);

export default ConnectedSpell;
