import React from 'react';
import SpellComponent from './Spell'

const SpellsList = ({spellsToRender}) => {
  return (
    <div>
      {spellsToRender
        .map(function (value) {
          return(
          <div key={value.Name}>
            <SpellComponent spellToRender={value}></SpellComponent>
          </div>);          
        })}
    </div>
  );

}

SpellsList.propType= {
    searchables: React.PropTypes.arrayOf(React.PropTypes.shape(
        {
            Level: React.PropTypes.number.isRequired,
            Name: React.PropTypes.string.isRequired,
            Type: React.PropTypes.string.isRequired,
            CastingTime: React.PropTypes.string.isRequired,
            Range: React.PropTypes.string.isRequired,
            Components: React.PropTypes.string.isRequired,
            Duration: React.PropTypes.string.isRequired,
            Description: React.PropTypes.string.isRequired,
            Class: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
        }
    )).isRequired
};

export default SpellsList;