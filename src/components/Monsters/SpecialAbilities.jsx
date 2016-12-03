import React from 'react';

const SpecialAbility = ({specialAbility}) => {
    return (
        <div>
            <h4>{specialAbility.Name}</h4>
            <p>{specialAbility.desc}</p>
            {specialAbility.attack_bonus !== "0" ? <span>Attack bonus:{specialAbility.attack_bonus}</span> : <div />}
        </div>
    );

}


const SpecialAbilities = ({specialAbilities}) => {
    if (specialAbilities == null) {
        return (<div />);
    }

    return (
        <div>
            <h2>Special abilities</h2>
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
        Name: React.PropTypes.string.isRequired,
        desc: React.PropTypes.string.isRequired,
        specialAbility: React.PropTypes.string.isRequired,
    }).isRequired
};

SpecialAbilities.propType = {
    specialAbilities: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            Name: React.PropTypes.string.isRequired,
        })
    ).isRequired
};

export default SpecialAbilities;