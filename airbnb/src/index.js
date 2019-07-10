import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { createLogger } from "redux-logger"

const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const middlewares = [thunk]

if (process.env.NODE_ENV !== "production") {
  middlewares.push(createLogger())
}

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
