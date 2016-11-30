import React from 'react';
import Components from './Components'

// Import spell style
import './style/Spell.css';

// To support markup in the description (like <br>)
// Todo: find less dangerous alternative
function createMarkup(text) {
    return {
        __html: text
    };
}

const SpellInfo = ({spellToRender}) => {

    return (
        <div className="spell-item">
          <h1 className="spell-title">
                        { spellToRender.Name }
                    </h1>
          <div className="spell-components">
            <Components spellToRender={ spellToRender } />
          </div>
          <div className="spell-quick-info">
            <p>
              <b>Range:</b>
              { spellToRender.Range }
              <br/>
              <b>Duration:</b>
              { spellToRender.Duration }
              <br/>
              <b>Casting time:</b>
              { spellToRender.CastingTime }
              <br/>
            </p>
          </div>
          <p className="spell-description" dangerouslySetInnerHTML={ createMarkup(spellToRender.Description) } />
        </div>
        );

}

export default SpellInfo;
