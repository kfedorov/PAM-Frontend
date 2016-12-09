import React from 'react';
import MonsterInfo from './MonsterInfo'

import LazyLoad from 'react-lazyload';

const MonstersList = ({monstersToRender}) => {
    return (
        <div className="list">
          { monstersToRender
                .map(function(value) {
                    return (
                        <LazyLoad key={ value.name } height={200} offset={100}>
                          <MonsterInfo monsterToRender={ value }></MonsterInfo>
                        </LazyLoad>
                        );
                }) }
        </div>
        );

}

MonstersList.propType = {
    monstersToRender: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
        })
    ).isRequired
};

export default MonstersList;