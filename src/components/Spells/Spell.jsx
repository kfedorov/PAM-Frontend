import React from 'react';

// Import spell style
import './Spell.css';

const Spell = ({spellToRender}) => {
    return (
        <div className="spell">
            <h1>
                {spellToRender.Name}
            </h1>
            <div>
             <h4>Range: {spellToRender.Range}</h4>
             <h4>Casting time: {spellToRender.CastingTime}</h4>   
            </div>
            <p>
                {spellToRender.Description}
            </p>
        </div>
    );

}

export default Spell;