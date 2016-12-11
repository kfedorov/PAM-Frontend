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
            <hr/>
            <Ability name="Strength" value={abilities.strength} />
            <Ability name="Dexterity" value={abilities.dexterity} />
            <Ability name="Constitution" value={abilities.constitution} />
            <Ability name="Intelligence" value={abilities.intelligence} />
            <Ability name="Wisdom" value={abilities.wisdom} />
            <Ability name="Charisma" value={abilities.charisma} />
        </div>
    );

}

Abilities.propType = {
    spellToRender: React.PropTypes.shape({
        strength: React.PropTypes.number.isRequired,
        dexterity: React.PropTypes.number.isRequired,
        constitution: React.PropTypes.number.isRequired,
        intelligence: React.PropTypes.number.isRequired,
        wisdom: React.PropTypes.number.isRequired,
        charisma: React.PropTypes.number.isRequired,
    }).isRequired
};

export default Abilities;
