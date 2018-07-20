/* Utils */
import React from "react";
import PropTypes from "prop-types";

const SpellComponentIcon = prop => {
    return (
        <div className={"component-item " + (prop.isRequired ? "" : "component-disabled")}>
            <img src={prop.icon} className="component-logo" alt={prop.alternative} />
            <span className="component-alternive">{prop.alternative[0]}</span>
        </div>
    );
};

SpellComponentIcon.propTypes = {
    isRequired: PropTypes.bool.isRequired,
    icon: PropTypes.string.isRequired,
    alternative: PropTypes.string.isRequired,
};

export default SpellComponentIcon;
