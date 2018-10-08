/* Utils */
import React, { Component } from 'react'

import { connect } from 'react-redux'

/* Components */
import { SearchBar } from '../common'
import { SpellsList } from './components'

import store from './'

class SpellDatabase extends Component {
  componentWillReceiveProps = nextProps => {
    const { all_spells } = nextProps

    this.setState({
      name_filter: new Array(all_spells.length).fill(true),
    })
  }

  constructor (props) {
    super(props)

    this.state = {
      name_filter: new Array(props.all_spells.length).fill(true),
    }

    this.updateNameFilter = this.updateNameFilter.bind(this)
    this.filterVisible = this.filterVisible.bind(this)
  }

  updateNameFilter (updatedNameFilter) {
    this.setState({
      name_filter: updatedNameFilter,
    })
  }

  filterVisible (all_spells) {
    return all_spells.filter(
      (x, i) => this.state.name_filter[i])
  }

  render () {
    const { all_spells } = this.props

    return (
      <div>
        <SearchBar searchables={ all_spells.map(s => s.name) }
                   callback={ this.updateNameFilter }
                   field="name"/>
        <SpellsList spellsToRender={ this.filterVisible(all_spells) }/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    all_spells: state[store.constants.NAME],
  }
}

const Database = connect(mapStateToProps)(SpellDatabase)

export default Database
