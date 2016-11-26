import React from 'react';
import SpellComponent from './Spell'

const SpellsList = ({spellsToRender}) => {
  return (
    <div>
      {spellsToRender
        .map(function (value) {
          return <SpellComponent spellToRender={value}></SpellComponent>;
        })}
    </div>
  );

}

export default SpellsList;