/* Utils */
import React from 'react';

/* Components */
import Components from './Components'

/* Style */
import './style/Spell.css';
import '../common/style/ManualStyle.css'

// To support markup in the description (like <br>)
// Todo: find less dangerous alternative
function createMarkup(text) {
  return {
    __html: text
  };
}

const SpellInfo = ({spellToRender}) => {

  return (
    <div className="information-box">
      <h1 className="spell-title">{ spellToRender.Name }</h1>
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


SpellInfo.propType = {
  spellToRender: React.PropTypes.shape({
    Level: React.PropTypes.number.isRequired,
    Name: React.PropTypes.string.isRequired,
    Type: React.PropTypes.string.isRequired,
    CastingTime: React.PropTypes.string.isRequired,
    Range: React.PropTypes.string.isRequired,
    Components: React.PropTypes.string.isRequired,
    Duration: React.PropTypes.string.isRequired,
    Description: React.PropTypes.string.isRequired,
    Class: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  }).isRequired
};


export default SpellInfo;
