import React from 'react'


const FightInfo = ({monster}) => {
    return (
        <div>
            <h2>Fight Info</h2>
            <span>Armor Class: {monster.ArmorClass}</span><br/>
            <span>Hit Points: {monster.HitPoints} ({monster.Hit_dice})</span><br/>
            <span>Speed: {monster.Speed}</span><br/>
        </div>
    );

}

FightInfo.propType = {
    monster: React.PropTypes.shape({
        ArmorClass: React.PropTypes.number.isRequired,
        HitPoints: React.PropTypes.number.isRequired,
        Hit_dice: React.PropTypes.string.isRequired,
        Speed: React.PropTypes.string.isRequired,
    }).isRequired
};

export default FightInfo;
