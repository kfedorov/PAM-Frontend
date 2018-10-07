import React from "react";
import Spell from "./Spell";
import LazyLoad, { forceCheck } from "react-lazyload";

class SpellDatabase extends React.Component {
    render() {
        const { spells } = this.props;

        return (
            <div>
                <h3>Spell Database</h3>
                {spells.map(function(spell, i) {
                    return (
                        <LazyLoad key={spell.name} height={1000} offset={500}>
                            <Spell key={i} spell={spell} />
                        </LazyLoad>
                    );
                })}
            </div>
        );
    }
}
export default SpellDatabase;
