import React from 'react';
import SpellInfo from './SpellInfo'

import LazyLoad, {forceCheck} from 'react-lazyload';

const SpellsList = ({spellsToRender}) => {
    forceCheck();
    return (
          <div >
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