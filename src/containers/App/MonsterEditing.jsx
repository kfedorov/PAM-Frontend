import React, { Component } from "react";
import Form from "react-jsonschema-form";
import { StickyContainer, Sticky } from "react-sticky";

import MonsterInfo from "../../components/Monsters/MonsterInfo";

/* Style and assets */
import "./MonsterEditing.css";

class MonsterEditing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monster: defaultMonster,
    };
  }

  handleSubmission = form => {
    const { formData } = form;
    fetch("/api/monster", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        monster: formData,
      }),
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  handleChange = form => {
    const { formData } = form;
    this.setState({
      monster: formData,
    });
  };

  handleError = err => {
    console.log(err);
  };

  render() {
    const { schema, uiSchema } = this.props;
    const { monster } = this.state;

    return (
      <div className="Form-Container">
        <Form
          className="Form"
          schema={schema}
          uiSchema={uiSchema}
          onSubmit={this.handleSubmission}
          onChange={this.handleChange}
          onError={this.handleError}
          formData={monster}
        />
        <StickyContainer className="sticky-box">
          <Sticky>
            {({ style }) => {
              return (
                <header style={style}>
                  <MonsterInfo monsterToRender={monster} />
                </header>
              );
            }}
          </Sticky>
        </StickyContainer>
      </div>
    );
  }
}

export default MonsterEditing;

const defaultMonster = {
  challengeRating: 0,
  name: "",
  size: "Medium",
  type: "",
  subtype: "",
  alignment: "",
  armorClass: 10,
  hitPoints: 0,
  hitDice: "",
  speed: "",
  abilities: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  },
  saves: [],
  skills: [],
  resistances: {
    damageVulnerabilities: [],
    damageResistance: [],
    damageImmunities: [],
    conditionImmunities: [],
  },
  specialAbilities: [],
  actions: [],
  legendaryAbilities: [],
  senses: "",
  languages: "",
};
