import React from 'react';
import SpellInfo from './SpellInfo'

import ReactList from 'react-list';


class ReactListSpellsList extends React.Component {

    spellRenderer = (index, key) => {
        var spell = this.props.spellsToRender[index];
        return (
            <div key={ spell.Name }>
              <SpellInfo spellToRender={ spell }></SpellInfo>
            </div>
            );
    }


    render() {
        return (
            <div>
              <h2>React List</h2>
              <div style={ { overflow: 'auto', maxHeight: 400 } }>
                <ReactList itemRenderer={ this.spellRenderer } length={ this.props.spellsToRender.length } type='uniform' />
              </div>
            </div>
            );
    }
}

export default ReactListSpellsList;