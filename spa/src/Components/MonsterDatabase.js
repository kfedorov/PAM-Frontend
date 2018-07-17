import React from "react";

import Monster from "./Monster";

class MonsterDatabase extends React.Component {
    render() {
        const { monsters, spells } = this.props;

        return (
            <div>
                <h3>Monster Database</h3>
                {monsters.map((monster, i) => (
                    <Monster key={i} monster={monster} spells={spells} />
                ))}
            </div>
        );
    }
}
export default MonsterDatabase;
