import React from 'react';

import Abilities from './Abilities'
import SpecialAbilities from './SpecialAbilities'
import Actions from './Actions'
import FightInfo from './FightInfo'
import OtherInfo from './OtherInfo'

import './style/Monster.css'

const MonsterInfo = ({monsterToRender}) => {
    return(
        <div className="monster-item">
            <h1>{monsterToRender.Name}</h1>
            <FightInfo monster={monsterToRender}/>
            <OtherInfo monster={monsterToRender}/>
            <Abilities abilities={monsterToRender.Abilities} />
           <SpecialAbilities specialAbilities={monsterToRender.SpecialAbilities} />
           <Actions actions={monsterToRender.Actions} />
        </div>
    );
}

export default MonsterInfo;