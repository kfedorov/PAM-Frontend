import React from 'react';

const SpecialAbility = ({specialAbility}) => {
    return (
        <div>
            <h4>{specialAbility.name}</h4>
            <p>{specialAbility.desc}</p>
            {specialAbility.attackBonus !== "0" ? <span>Attack bonus:{specialAbility.attackBonus}</span> : <div />}
        </div>
    );

}


const SpecialAbilities = ({title, specialAbilities}) => {
    if (specialAbilities == null) {
        return (<div />);
    }

    return (
        <div>
            <h2>{title}</h2>
            {specialAbilities
                .map(function (value) {
                    return (
                        <div key={value.Name}>
                            <SpecialAbility specialAbility={value} />
                        </div>
                    );
                })}
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