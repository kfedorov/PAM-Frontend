import React, {Component} from 'react'

class SearchBar extends Component {

    constructor(props){
        super(props);
        
        this.filtered = this.filtered.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    filtered(name){

        function contains(value){
            return value.Name.toLowerCase().includes(name.toLowerCase());
        }

        var filteredList = this.props.input.filter(contains);

        this.props.callback(filteredList);
    };

    handleNameChange(event) {
        this.filtered(event.target.value);
    };

    render() {
        return (
            <div>
                <form>
                    <input type="text" onChange={this.handleNameChange}/>
                </form>
            </div>
        );
    }
}


export default SearchBar