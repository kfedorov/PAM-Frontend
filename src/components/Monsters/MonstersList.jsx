import React from 'react';
import MonsterInfo from './MonsterInfo'

const MonstersList = ({monstersToRender}) => {
    return (
        <div>
          { monstersToRender
                .map(function(value) {
                    return (
                        <div key={ value.name }>
                          <MonsterInfo monsterToRender={ value }></MonsterInfo>
                        </div>
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