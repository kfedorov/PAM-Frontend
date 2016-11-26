import React from 'react';

// Import spell style
import './Spell.css';

// To support markup in the description (like <br>)
// Todo: find less dangerous alternative
function createMarkup(text){
    return {__html: text}; 
}
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
            <p className="description" dangerouslySetInnerHTML={createMarkup(spellToRender.Description)}/>
        </div>
    );

}

export default Spell;