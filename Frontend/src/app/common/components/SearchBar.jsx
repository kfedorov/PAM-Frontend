/* Utils */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

/* Style */
import './style/SearchBar.css'

class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.filtered_indices = this.filtered_indices.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  filtered_indices (name) {
    // Callsback with an array of bools, indicating whether each element matches
    this.props.callback(this.props.searchables.map(
      v => v.toLowerCase().includes(name.toLowerCase())))
  }

  handleNameChange (event) {
    this.filtered_indices(event.target.value)
  }

  render () {
    return (
      <div className='search-bar'>
        <input
          type='text'
          onChange={ this.handleNameChange }
          autoFocus
          placeholder={ 'Search by ' + this.props.field + ':' }
        />
      </div>
    )
  }
}

SearchBar.propType = {
  searchables: PropTypes.arrayOf(PropTypes.string.required).isRequired,
  field: PropTypes.string.isRequired,
}

export default SearchBar
