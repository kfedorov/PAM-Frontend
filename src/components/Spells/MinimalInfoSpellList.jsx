import React from 'react';
import SpellInfo from './SpellInfo'

const MinimalInfoSpellList = ({spellsToRender}) => {
    return (
        <div>
          <h2>Minimal</h2>
          { spellsToRender
                .map(function(value) {
                    return (
                        <div key={ value.Name }>
                          <h3>{value.Name}</h3>
                        </div>
                        );
                }) }
        </div>

        );

}

export default MinimalInfoSpellList;