import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
    state = {
        searchTerm: ''
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.searchTerm}
                    onChange={event => this.onInputChange(event.target.value)}  />
            </div>
        );
    }

    onInputChange(searchTerm){
        //console.log(searchTerm);
        this.setState({
            searchTerm
        });
        this.props.onSearchChange(searchTerm);
    }
}

SearchBar.propTypes = {
    onSearchChange : PropTypes.func
}

export default SearchBar;
