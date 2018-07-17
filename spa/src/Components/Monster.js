import React from "react";

class Monster extends React.Component {
    render() {
        return <div>Monster: {this.props.match.params.monsterId}</div>;
    }
}
export default Monster;
