/* Utils */
import React from 'react';

/* Sub-Components */
import Abilities from './SubComponents/Abilities'
import SpecialAbilities from './SubComponents/SpecialAbilities'
import Actions from './SubComponents/Actions'
import FightInfo from './SubComponents/FightInfo'
import OtherInfo from './SubComponents/OtherInfo'

/* Style */
import './style/Monster.css'
import '../common/style/ManualStyle.css'

const MonsterInfo = ({monsterToRender}) => {
    return (
        <div className="information-box monster-info">
          <h1>{ monsterToRender.name }</h1>
          <FightInfo monster={ monsterToRender } />
          <Abilities abilities={ monsterToRender.abilities } />
          <OtherInfo monster={ monsterToRender } />
          <SpecialAbilities title="Special Abilities" specialAbilities={ monsterToRender.specialAbilities } />
          <Actions actions={ monsterToRender.actions } />
          <SpecialAbilities title="Legendaries Actions" specialAbilities={ monsterToRender.legendaryAbilities } />
        </div>
        );
}

export default MonsterInfo;