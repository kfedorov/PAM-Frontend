import React from 'react'


const Ability = ({name, value}) => {
    return (
        <div>
            <span>{name}:{value}</span>
        </div>
    );

}


const Abilities = ({abilities}) => {
    return (
        <div>
            <h2>Abilities</h2>
            <Ability name="Strength" value={abilities.Strength} />
            <Ability name="Dexterity" value={abilities.Strength} />
            <Ability name="Constitution" value={abilities.Strength} />
            <Ability name="Intelligence" value={abilities.Strength} />
            <Ability name="Wisdom" value={abilities.Strength} />
            <Ability name="Charisma" value={abilities.Strength} />
        </div>
    );

}

Abilities.propType = {
    spellToRender: React.PropTypes.shape({
        Strength: React.PropTypes.number.isRequired,
        Dexterity: React.PropTypes.number.isRequired,
        Constitution: React.PropTypes.number.isRequired,
        Intelligence: React.PropTypes.number.isRequired,
        Wisdom: React.PropTypes.number.isRequired,
        Charisma: React.PropTypes.number.isRequired,
    }).isRequired
};

export default Abilities;
