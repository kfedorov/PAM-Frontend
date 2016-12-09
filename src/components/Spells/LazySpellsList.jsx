import React from 'react';
import SpellInfo from './SpellInfo'

import LazyLoad from 'react-lazyload';

const LazySpellsList = ({spellsToRender}) => {
  return (
    <div className="list">
      { spellsToRender
          .map(function(value) {
            return (
              <LazyLoad key={ value.Name } offset={100}>
                <SpellInfo spellToRender={ value }></SpellInfo>
              </LazyLoad >
              );
          }) }
    </div>
    );

}

LazySpellsList.propType = {
    spellsToRender: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            Name: React.PropTypes.string.isRequired,
        })
    ).isRequired
};

export default LazySpellsList;