import React from 'react';

const Action = ({action}) => {
    return (
        <div>
            <h4>{action.Name}</h4>
            <p>{action.desc}</p>
            {action.attack_bonus !== "0" ? <div><span>Attack bonus: {action.attack_bonus}</span><br/></div> : <div />}
            {action.damage_dice !== null ? <div><span>Damage dice: {action.damage_dice}</span><br/></div> : <div />}
            {action.damage_bonus !== null ? <div><span>Damage bonus: {action.damage_bonus}</span><br/></div> : <div />}

        </div>
    );

}

const Actions = ({actions}) => {
    if (actions == null) {
        return (<div />);
    }

    return (
        <div>
            <h2>Actions</h2>
            {actions
                .map(function (value) {
                    return (
                        <div key={value.Name}>
                            <Action action={value} />
                        </div>
                    );
                })}
        </div>
    );

}

Action.propType = {
    action: React.PropTypes.shape({
        Name: React.PropTypes.string.isRequired,
        desc: React.PropTypes.string.isRequired,
        attack_bonus: React.PropTypes.string.isRequired,
        damage_dice: React.PropTypes.string.isRequired,
        damage_bonus: React.PropTypes.string.isRequired,
    }).isRequired
};

Actions.propType = {
    actions: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            Name: React.PropTypes.string.isRequired,
        })
    ).isRequired
};

export default Actions;