import React from "react";
import Spell from "./Spell";

class SpellDatabase extends React.Component {
    render() {
        const { spells } = this.props;

        return (
            <div>
                <h3>Spell Database</h3>
                {spells.map((spell, i) => <Spell key={i} spell={spell} />)}
            </div>
        );
    }
}
export default SpellDatabase;
