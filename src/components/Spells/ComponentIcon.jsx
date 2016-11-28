import React from 'react'

// Import spell style
import './style/Component.css';

function isComponentEnabled(component, requiredComponent) {
    if (requiredComponent.toLowerCase().includes(component.toLowerCase())) {
        return true;
    } else {
        return false;
    }
}

const ComponentIcon = (prop) => {
    return (
        <div
            className={"component-item " + (isComponentEnabled(prop.valueToCheck, prop.requiredValue)
            ? ""
            : "disabled")}>
            <img src={prop.icon} className="component-logo" alt={prop.alternative}/>
            <span className="hidden">{prop.alternative[0]}</span >
        </div>
    )
}

ComponentIcon.propTypes = {
    valueToCheck: React.PropTypes.string.isRequired,
    requiredValue: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string.isRequired,
    alternative: React.PropTypes.string.isRequired
};

export default ComponentIcon;