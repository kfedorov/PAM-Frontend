/* Utils */
import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

/* Components */
import Components from "./Components";

/* Style */
import "./style/Spell.css";
import "../common/style/ManualStyle.css";

// To support markup in the description (like <br>)
// Todo: find less dangerous alternative
function createMarkup(text) {
  return {
    __html: text,
  };
}

const SpellInfo = ({ spellToRender }) => {
  return (
    <div className="information-box">
      <Grid bsClass="grid">
        <Row>
          <Col xs={12} sm={8}>
            <h1 className="spell-title">
              {spellToRender.name}
            </h1>
            <div className="spell-type">
              <span>
                {spellToRender.type}
              </span>
              <span>
                {spellToRender.canBeRitual && " (ritual)"}{" "}
              </span>
            </div>
          </Col>
          <Col xs={12} sm={4}>
            <div className="spell-components">
              <Components components={spellToRender.components} />
            </div>
          </Col>
        </Row>
      </Grid>
      <div className="spell-quick-info">
        <p>
          <b>Range: </b>
          {spellToRender.range}
          <br />
          <b>Duration: </b>
          {spellToRender.duration}
          <br />
          <b>Casting time: </b>
          {spellToRender.castingTime}
          <br />
        </p>
      </div>
      <p dangerouslySetInnerHTML={createMarkup(spellToRender.description)} />
      {spellToRender.higherLevel &&
        <p>
          <b>At higher level. </b>
          {spellToRender.higherLevel}
        </p>}
      <p>
        <b>Class:</b> {spellToRender.class.join(", ")}
      </p>
    </div>
  );
};

SpellInfo.propType = {
  spellToRender: React.PropTypes.shape({
    level: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    castingTime: React.PropTypes.string.isRequired,
    range: React.PropTypes.string.isRequired,
    components: React.PropTypes.string.isRequired,
    duration: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    higherLevel: React.PropTypes.string.isRequired,
    class: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  }).isRequired,
};

export default SpellInfo;
