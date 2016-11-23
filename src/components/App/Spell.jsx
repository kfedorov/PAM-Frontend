import React from 'react';

const Spell = ({spellToRender}) => {
    return (
        <div>
            <h1>
                {spellToRender.Name}
            </h1>
            <p>
                {spellToRender.Class}
            </p>
        </div>
    );

}

export default Spell;