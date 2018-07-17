import React from "react";

class MonsterSingle extends React.Component {
    render() {
        return <div>Monster: {this.props.match.params.monsterId}</div>;
    }
}
export default MonsterSingle;
