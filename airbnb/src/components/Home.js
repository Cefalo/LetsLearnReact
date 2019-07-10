import React, {useEffect, useContext} from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import ApartmentContext from '../contexts/apartment'
import {FETCH_APARTMENT} from '../actions'

const Home = () => {
    const {state: {apartments}, dispatch} = useContext(ApartmentContext)

    useEffect( () => {
        dispatch({type: FETCH_APARTMENT})
    }, [])

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
          <hr className="my-4"/>
          <div className="row">
              {apartments && (apartments.map((item, i) => <Card key={i} item={item}/>))}
          </div>
      </div>
    )
}

Home.propTypes = {
    apartments: PropTypes.array,
    fetchApartment: PropTypes.func,
    fetchFromGithub: PropTypes.func,
    searchApartments: PropTypes.func
};

// const mapStateToProps = state => {
//     return {
//         apartments: state.searchedApartment
//     }
// };
//
// export default connect(mapStateToProps, {
//     fetchApartment,
//     fetchFromGithub,
//     searchApartments
// })(Home);
export default Home