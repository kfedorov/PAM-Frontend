import React from "react";
import PropTypes from "prop-types";

class TestComponent extends React.Component {
    static PropTypes = {
        boolProp: PropTypes.bool.isRequired,
        funcProp: PropTypes.func,
    };

    render() {
        let a = true;
        a = this.props.boolProp;

        console.log(a);

        return (
            <div>
                <TestComponent boolProp="aaa" />;
            </div>
        );
    }
}

export default class MainComponent extends React.Component {
    render() {
        let a = true;
        a = 2100;
        a = "aaa";

        console.log(a);

        return (
            <div>
                <TestComponent boolProp="aaa" randomProp="aaa" />;
            </div>
        );
    }
}
