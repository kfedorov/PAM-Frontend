import React from "react";

class Spell extends React.Component {
    render() {
        return <div>Spell: {this.props.match.params.spellId}</div>;
    }
}
export default Spell;
