import React from "react";
import { Link } from "react-router-dom";

class Monster extends React.Component {
    render() {
        return (
            <div>
                <Link to={`monsters/${this.props.monster.name}`}>
                    <h3>{this.props.monster.name}</h3>
                </Link>
            </div>
        );
    }
}
export default Monster;
