/* Utils */
import React, { Component } from 'react'

import { connect } from 'react-redux'

/* Components */
import { MonstersList } from './components'

import store from './'
import SearchBar from '../common/components/SearchBar'

class MonstersDatabase extends Component {
  componentWillReceiveProps = nextProps => {
    const { all_monsters } = nextProps

    this.setState({
      name_filter: new Array(all_monsters.length).fill(true),
    })
  }

  constructor (props) {
    super(props)
    const { all_monsters } = props

    this.state = {
      name_filter: new Array(all_monsters.length).fill(true),
    }

    this.updateNameFilter = this.updateNameFilter.bind(this)
    this.filterVisible = this.filterVisible.bind(this)
  }

  updateNameFilter (updatedNameFilter) {
    this.setState({
      name_filter: updatedNameFilter,
    })
  }

  filterVisible (allItems) {
    return allItems.filter((x, i) => this.state.name_filter[i])
  }

  render () {
    const { all_monsters } = this.props

    return (
      <div>
        <SearchBar searchables={ all_monsters.map(m => m.name) }
                   callback={ this.updateNameFilter }
                   field="name"/>
        <MonstersList monstersToRender={ this.filterVisible(all_monsters) }/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    all_monsters: state[store.constants.NAME],
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMonster: monster => {
      dispatch(store.actions.add(monster))
    },
  }
}

const Database = connect(mapStateToProps, mapDispatchToProps)(MonstersDatabase)

export default Database
