import React from 'react'


function modifierCalculator(value) {
    var modifier;
    if(value > 10)
    {
        value = value - 10;
        modifier = "+" + Math.floor(value/2); 
    }
    else{
        value = value - 10;
        modifier = Math.floor(value/2); 
    }

    return modifier;
}

const Ability = ({name, value}) => {
    return (
        <div className="ability">
          <div>
            <b>{ name.substring(0, 3).toUpperCase() }</b>
          </div>
          <div>
            <span>{ value } ({ modifierCalculator(value) })</span>
          </div>
        </div>
        );

}


const Abilities = ({abilities}) => {
    return (
        <div>
          <h2>Abilities</h2>
          <hr/>
          <div className="abilities">
            <Ability name="Strength" value={ abilities.strength } />
            <Ability name="Dexterity" value={ abilities.dexterity } />
            <Ability name="Constitution" value={ abilities.constitution } />
            <Ability name="Intelligence" value={ abilities.intelligence } />
            <Ability name="Wisdom" value={ abilities.wisdom } />
            <Ability name="Charisma" value={ abilities.charisma } />
          </div>
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
