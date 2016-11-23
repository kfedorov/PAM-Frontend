import React, {Component} from 'react'

// Import for react-select
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.filtered = this
            .filtered
            .bind(this);
        this.handleNameChange = this
            .handleNameChange
            .bind(this);
        this.handleSelect = this
            .handleSelect
            .bind(this);
    }

    filtered(name) {

        function contains(value) {
            return value
                .Name
                .toLowerCase()
                .includes(name.toLowerCase());
        }

        var filteredList = this
            .props
            .input
            .filter(contains);

        this
            .props
            .callback(filteredList);
    };

    handleNameChange(event) {

        this.filtered(event.target.value);
    };

    handleSelect(selected) {
        console.log(selected);
        this.filtered(selected.value);
    };

    getSearchable(item) {
        return {value: item.Name, label: item.Name};
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" onChange={this.handleNameChange}/>
                    <Select
                        type="text"
                        onChange={this.handleSelect}
                        options={this
                        .props
                        .input
                        .map(this.getSearchable)}/>
                </form>
            </div>
        );
    }
}

export default SearchBar