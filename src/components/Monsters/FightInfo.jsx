import React from 'react'


const FightInfo = ({monster}) => {
    return (
        <div>
            <h2>Fight Info</h2>
            <span>Armor Class: {monster.armorClass}</span><br/>
            <span>Hit Points: {monster.hitPoints} ({monster.hitDice})</span><br/>
            <span>Speed: {monster.speed}</span><br/>
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
