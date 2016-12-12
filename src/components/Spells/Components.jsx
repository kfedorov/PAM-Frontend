/* Utils */
import React from 'react';

/* Style */
import './style/Component.css';

/* Components */
import ComponentIcon from './ComponentIcon'

/* Components icon */
import concentration from './icon/concentration.svg';
import verbal from './icon/verbal.svg';
import somatic from './icon/somatic.svg';
import material from './icon/material.svg';

const Components = ({spellToRender}) => {

    return (
        <div>
          <div className="component-list">
            <ComponentIcon valueToCheck="concentration" requiredValue={ spellToRender.Duration } icon={ concentration } alternative="Concentration" />
            <ComponentIcon valueToCheck="v" requiredValue={ spellToRender.Components } icon={ verbal } alternative="Verbal" />
            <ComponentIcon valueToCheck="s" requiredValue={ spellToRender.Components } icon={ somatic } alternative="Somatic" />
            <ComponentIcon valueToCheck="m" requiredValue={ spellToRender.Components } icon={ material } alternative="Meterial" />
          </div>
        </div>
        );

}

Components.propTypes = {
    spellToRender: React
        .PropTypes
        .shape({
            Duration: React.PropTypes.string.isRequired,
            Components: React.PropTypes.string.isRequired
        })
};

export default Components;