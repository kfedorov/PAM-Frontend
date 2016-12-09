import React from 'react';
import SpellInfo from './SpellInfo'

import LazyLoad from 'react-lazyload';

const SpellsList = ({spellsToRender}) => {
    return (
          <div className="list">
            { spellsToRender
                  .map(function(value) {
                      return (
                          <LazyLoad key={ value.Name } height={200} offset={100} >
                            <SpellInfo spellToRender={ value }></SpellInfo>
                          </LazyLoad>
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