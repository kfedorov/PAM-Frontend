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

const Components = ({components}) => {

    return (
        <div>
          <div className="component-list">
            <ComponentIcon isRequired={ components.concentration } icon={ concentration } alternative="Concentration" />
            <ComponentIcon isRequired={ components.verbal } icon={ verbal } alternative="Verbal" />
            <ComponentIcon isRequired={ components.somatic } icon={ somatic } alternative="Somatic" />
            <ComponentIcon isRequired={ components.material }icon={ material } alternative="Meterial" />
          </div>
        </div>
        );

}

Components.propTypes = {
    components: React.PropTypes.shape({
        concentration: React.PropTypes.bool.isRequired,
        somatic: React.PropTypes.bool.isRequired,
        verbal: React.PropTypes.bool.isRequired,
        material: React.PropTypes.bool.isRequired,
    })
};

export default Components;