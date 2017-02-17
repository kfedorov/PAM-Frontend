import React, { Component } from 'react';
import Form from 'react-jsonschema-form'

import MonsterInfo from '../../components/Monsters/MonsterInfo'

/* Style and assets */
import './MonsterEditing.css';

class MonsterEditing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            monster: defaultMonster
        };
    }

    handleSubmission = (form) => {
        const {formData} = form
        console.log(JSON.stringify(formData));
    }

    handleChange = (form) => {
        const {formData} = form
        this.setState({
            monster: formData
        })
    }

    handleError = (err) => {
        console.log(err)
    }

    render() {
        const {schema} = this.props
        const {monster} = this.state

        return (
            <div className="Form-Container">
              <Form className="Form" schema={ schema } onSubmit={ this.handleSubmission } onChange={ this.handleChange } onError={ this.handleError } formData={ monster }
              />
              <MonsterInfo monsterToRender={ monster } />
            </div>
        )
    }
}


export default MonsterEditing;

const defaultMonster = {
    "challengeRating": 0,
    "name": "",
    "size": "Medium",
    "type": "",
    "subtype": "",
    "alignment": "",
    "armorClass": 10,
    "hitPoints": 0,
    "hitDice": "",
    "speed": "",
    "abilities": {
        "strength": 10,
        "dexterity": 10,
        "constitution": 10,
        "intelligence": 10,
        "wisdom": 10,
        "charisma": 10
    },
    "saves": [],
    "skills": [],
    "resistances": {
        "damageVulnerabilities": [],
        "damageResistance": [],
        "damageImmunities": [],
        "conditionImmunities": []
    },
    "specialAbilities": [],
    "actions": [],
    "legendaryAbilities": [],
    "senses": "",
    "languages": ""
}