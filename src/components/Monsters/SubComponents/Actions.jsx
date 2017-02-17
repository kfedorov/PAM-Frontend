/* Utils */
import React from 'react';

const Action = ({action}) => {
    return (
        <div>
          <p><span className="element-name">{ action.name }. </span>
            { action.desc }
          </p>
        </div>
        );
}

// Move in tool tip?
// {action.attackBonus !== "0" ? <div><span>Attack bonus: {action.attackBonus}</span><br/></div> : <div />}
// {action.damageDice !== null ? <div><span>Damage dice: {action.damageDice}</span><br/></div> : <div />}
// {action.damageBonus !== null ? <div><span>Damage bonus: {action.damageBonus}</span><br/></div> : <div />}

const Actions = ({actions}) => {
    if (actions == null) {
        return (<div />);
    }

    return (
        <div>
          <h2>Actions</h2>
          <hr/>
          { actions
                .map(function(value) {
                    return (
                        <div key={ value.name }>
                          <Action action={ value } />
                        </div>
                        );
                }) }
        </div>
        );

}


Actions.propType = {
    actions: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            desc: React.PropTypes.string.isRequired,
            attackBonus: React.PropTypes.number,
            damageDice: React.PropTypes.string,
            damageBonus: React.PropTypes.number,
        })
    ).isRequired
};

export default Actions;