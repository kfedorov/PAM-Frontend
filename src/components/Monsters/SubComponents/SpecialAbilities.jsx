/* Utils */
import React from "react";

/* Style */
import "./Style/MonsterInfoElement.css";
import PropTypes from "prop-types";

const SpecialAbility = ({ specialAbility }) => {
  return (
    <div>
      <p>
        <span className="element-name">
          {specialAbility.name}.{" "}
        </span>
        {specialAbility.desc}
      </p>
    </div>
  );
};

const SpecialAbilities = ({ title, specialAbilities }) => {
  if (specialAbilities == null) {
    return <div />;
  }

  return (
    <div>
      <h2>
        {title}
      </h2>
      <hr />
      {specialAbilities.map(function(value) {
        return (
          <div key={value.name}>
            <SpecialAbility specialAbility={value} />
          </div>
        );
      })}
    </div>
  );
};

SpecialAbility.propType = {
  specialAbility: PropTypes.shape({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string,
  }).isRequired,
};

export default SpecialAbilities;
