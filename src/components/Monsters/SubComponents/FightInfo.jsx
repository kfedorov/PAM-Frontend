import React from 'react'


const FightInfo = ({monster}) => {
    return (
        <div>
            <hr/>
            <span><b>Armor Class:</b> {monster.armorClass}</span><br/>
            <span><b>Hit Points:</b> {monster.hitPoints} ({monster.hitDice})</span><br/>
            <span><b>Speed:</b> {monster.speed}</span><br/>
        </div>
    );

}

FightInfo.propType = {
    monster: React.PropTypes.shape({
        armorClass: React.PropTypes.number.isRequired,
        hitPoints: React.PropTypes.number.isRequired,
        hitDice: React.PropTypes.string.isRequired,
        speed: React.PropTypes.string.isRequired,
    }).isRequired
};

export default FightInfo;
