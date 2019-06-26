import React from 'react';
import Search from './Search';
import Card from './Card';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {fetchApartment, fetchFromGithub} from '../actions';

class Home extends React.Component {

    componentDidMount() {
        this.props.fetchFromGithub();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron">
                        <h1 className="display-4">Thinking in React!</h1>
                        <p className="lead">React makes it painless to create interactive UIs. Design simple views for
                            each
                            state in
                            your application, and React will efficiently update and render just the right components
                            when
                            your data
                            changes.</p>
                    </div>
                </div>
                <Search/>
                <hr className="my-4"/>
                <div className="row">
                    {this.props.apartments.map((item, i) => <Card key={i} item={item}/>)}
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    apartments: PropTypes.array,
    fetchApartment: PropTypes.func,
    fetchFromGithub: PropTypes.func
};

const mapStateToProps = state => {
    return {
        apartments: state.apartments
    }
};

export default connect(mapStateToProps, {
    fetchApartment,
    fetchFromGithub
})(Home);