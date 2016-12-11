import React from 'react';

// Components
import Abilities from './Abilities'
import SpecialAbilities from './SpecialAbilities'
import Actions from './Actions'
import FightInfo from './FightInfo'
import OtherInfo from './OtherInfo'

// Style
import './style/Monster.css'
import '../common/style/ManualInfo.css'

const MonsterInfo = ({monsterToRender}) => {
    return (
        <div className="information-box">
          <h1>{ monsterToRender.name }</h1>
          <FightInfo monster={ monsterToRender } />
          <OtherInfo monster={ monsterToRender } />
          <Abilities abilities={ monsterToRender.abilities } />
          <SpecialAbilities title="Special Abilities" specialAbilities={ monsterToRender.specialAbilities } />
          <Actions actions={ monsterToRender.actions } />
          <SpecialAbilities title="Legendaries Actions" specialAbilities={ monsterToRender.legendaryAbilities } />
        </div>
        );
}

export default MonsterInfo;