import React from 'react';
import SpellInfo from './SpellInfo'

const SpellsList = ({spellsToRender}) => {
  return (
    <div>
      { spellsToRender
          .map(function(value) {
            return (
              <div key={ value.Name }>
                <SpellInfo spellToRender={ value }></SpellInfo>
              </div>
              );
          }) }
    </div>
    );

}

SpellsList.propType = {
    spellsToRender: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            Name: React.PropTypes.string.isRequired,
        })
    ).isRequired
};

export default SpellsList;