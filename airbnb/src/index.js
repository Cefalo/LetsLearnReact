import React, {useReducer} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApartmentContext from "./contexts/apartment"
import {rootReducer, initialState} from "./reducers/apartments"

const Root = () => {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  return (
    <ApartmentContext.Provider value={{state, dispatch}}>
      <App />
    </ApartmentContext.Provider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
