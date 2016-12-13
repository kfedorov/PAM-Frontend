/* Utils */
import React from 'react'

/* Style */
import './style/Component.css';



const ComponentIcon = (prop) => {
    return (
        <div className={ "component-item " + (prop.isRequired
                     ? ""
                     : "component-disabled") }>
          <img src={ prop.icon } className="component-logo" alt={ prop.alternative } />
          <span className="component-alternive">{ prop.alternative[0] }</span >
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