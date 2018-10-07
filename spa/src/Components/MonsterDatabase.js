import React from "react";
import LazyLoad, { forceCheck } from "react-lazyload";
import Monster from "./Monster";

class MonsterDatabase extends React.Component {
    render() {
        const { monsters, spells } = this.props;

        return (
            <div>
                <h3>Monster Database</h3>
                {monsters.map(function(monster, i) {
                    return (
                        <LazyLoad key={monster.name} height={1000} offset={500}>
                            <Monster monster={monster} spells={spells} />
                        </LazyLoad>
                    );
                })}
            </div>
        );
    }
}

export default MonsterDatabase;
