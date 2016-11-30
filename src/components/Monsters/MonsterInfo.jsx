import React from 'react';

import './style/Monster.css'

const MonsterInfo = ({monsterToRender}) => {
    return(
        <div className="monster-item">
            <h1>{monsterToRender.Name}</h1>
        </div>
    );
}

export default MonsterInfo;