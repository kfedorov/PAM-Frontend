import React, { Component } from 'react';
import MonsterInfo from './MonsterInfo'

import LazyLoad, {forceCheck} from 'react-lazyload';

// Importing style
import '../common/style/List.css';

class MonstersList extends Component {

  componentDidUpdate(){
      forceCheck();
  }  

  render() {

    return (
        <div className="list">
          { this.props.monstersToRender
                .map(function(value) {
                    return (
                        <LazyLoad key={ value.name } height={1000} offset={500}>
                          <MonsterInfo monsterToRender={ value }></MonsterInfo>
                        </LazyLoad>
                        );
                }) }
        </div>
        );
  }
}


MonstersList.propType = {
    monstersToRender: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
        })
    ).isRequired
};

export default MonstersList;