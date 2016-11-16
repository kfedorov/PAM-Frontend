import React, { Component } from 'react';


class Spell extends Component {
render() {
    return (
        <div>
            <h1> {this.props.spell.Name} </h1>
            <p> {this.props.spell.Description} </p>
        </div>
    );
}
}

export default Spell;