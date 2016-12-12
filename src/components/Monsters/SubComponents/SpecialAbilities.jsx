/* Utils */
import React from 'react';

/* Style */
import './Style/MonsterInfoElement.css'

const SpecialAbility = ({specialAbility}) => {
    return (
        <div>
          <p><span className="element-name">{ specialAbility.name }. </span>
            { specialAbility.desc }
          </p>
          { specialAbility.attackBonus !== "0" ? <span>lololAttack bonus:{ specialAbility.attackBonus }</span> : <div /> }
        </div>
        );

}


const SpecialAbilities = ({title, specialAbilities}) => {
    if (specialAbilities == null) {
        return (<div />);
    }

    return (
        <div>
          <h2>{ title }</h2>
          <hr/>
          { specialAbilities
                .map(function(value) {
                    return (
                        <div key={ value.Name }>
                          <SpecialAbility specialAbility={ value } />
                        </div>
                        );
                }) }
        </div>
        );

}

SpecialAbility.propType = {
    specialAbility: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        desc: React.PropTypes.string.isRequired,
        specialAbility: React.PropTypes.string.isRequired,
    }).isRequired
};

SpecialAbilities.propType = {
    specialAbilities: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
        })
    ).isRequired
};

export default SpecialAbilities;