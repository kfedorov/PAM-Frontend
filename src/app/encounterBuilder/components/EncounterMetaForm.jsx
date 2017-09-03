import React, { Component } from "react";
import PropTypes from "prop-types";

class EncounterMetaForm extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onNameChange: PropTypes.func.isRequired,
    onDescriptionChange: PropTypes.func.isRequired,
  };

  handleNameChange = e => {
    this.props.onNameChange(e.target.value);
  };

  handleDescriptionChange = e => {
    this.props.onDescriptionChange(e.target.value);
  };

  render() {
    return (
      <div>
        <div>
          <label>
            Encounter Name:
            <input
              type="text"
              value={this.props.name}
              onChange={this.handleNameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              value={this.props.description}
              onChange={this.handleDescriptionChange}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default EncounterMetaForm;
