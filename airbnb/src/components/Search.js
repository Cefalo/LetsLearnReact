import React from 'react'
import PropTypes from 'prop-types';

class Search extends React.Component {
    state = {
        term: ''
    };

    onInputChange(term) {
        console.log(term);
        this.setState({term});
        this.props.onSearch(term);
    };

    render() {
        return (
            <div className="row">
                <div className="col">
                    <form>
                        <div className="form-row">
                            <input
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="Search Places"
                                value={this.state.term}
                                onChange={event => this.onInputChange(event.target.value)}
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    onSearch: PropTypes.func
};

export default Search
