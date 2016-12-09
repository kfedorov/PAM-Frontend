import React from 'react';
import SpellInfo from './SpellInfo'

import LazyLoad from 'react-lazyload';

const LazySpellsList = ({spellsToRender}) => {
    return (
        <div>
        <h2>Lazy</h2>
          <div className="list">
            { spellsToRender
                  .map(function(value) {
                      return (
                          <LazyLoad key={ value.Name } height={200} >
                            <SpellInfo spellToRender={ value }></SpellInfo>
                          </LazyLoad>
                          );
                  }) }
          </div>
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