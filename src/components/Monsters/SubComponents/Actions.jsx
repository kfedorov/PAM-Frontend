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
            {actions
                .map(function (value) {
                    return (
                        <div key={value.name}>
                            <Action action={value} />
                        </div>
                    );
                })}
        </div>
    );

}

Action.propType = {
    action: React.PropTypes.shape({
        bame: React.PropTypes.string.isRequired,
        desc: React.PropTypes.string.isRequired,
        attackBonus: React.PropTypes.string.isRequired,
        damageDice: React.PropTypes.string.isRequired,
        damageBonus: React.PropTypes.string.isRequired,
    }).isRequired
};

Actions.propType = {
    actions: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
        })
    ).isRequired
};

export default Actions;