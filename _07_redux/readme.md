Redux
======

### Installation
```
npm install --save redux react-redux
```

### Integrating of redux in react app

First we need to create a `combineReducers`. Here's how it follow

```
import {combineReducers} from 'redux';

export default combineReducers({});
```

Now, we need to wrap the 'App' component within `Provider` component

Here's how it will be:-
```
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

<Provider store={store}>
	<App/>
</Provider>
```

### developing a reducer

A reducer will be called with a piece of application state & action. it need to check the action and depending on the action, it can provide updated piece of application state.

Let's create apartment reducer.
```
export default(state, action) => {
	return 'Hello';
}
```

and in the `reducers/index.js`, need to add that reducer within `combineReducers`
```
import apartmentReducer from ...

export default combineReducers({
	apartments: apartmentReducer
});
```

Note that we can not return `undefined` from a reducer. For default state, we can return `null` if needed.

### developing an action creator

So, an action creator need to return a plain javascript object, that must contain a `type` field and an optional `payload` field.

so, `apartment.action` will be like following:-

```
import apartments from '../data';

export const FETCH_APARTMENT = 'FETCH_APARTMENT';

export const fetchApartment = () => {
	return {
		type: FETCH_APARTMENT,
		payload: apartments
	};
};
```

can develop a common export for all the different actions like following:
```
export * from ...
```

### developing logic of apartment reducer

```
import {FETCH_APARTMENT} from '../actions';
	
	export default (state = [], action) => {
	    switch (action.type) {
	        case FETCH_APARTMENT:
	            return action.payload;
	        default:
	            return state;
	    }
	} 
```

### hook application state in a component

For doing this, we need to use the `connect` module from 'react-redux'. We need to provide a `mapStateToProps` function that will provide necessary props to our specific component from application state. 

importing:
```
import {connect} from 'react-redux';
```

mapping application state to props:
```
const mapStateToProps = state => {
	return {
		apartments: state.apartments
	}
};
```

and connecting with react component:
```
export default connect(mapStateToProps)(Home);
```

### calling action creator from a component:
we need to import our require action creator and pass that to component via `connect` as props

importing :-
```
import {fetchApartment} from '../actions';
```

connecting:-
```
export default connect(mapStateToProps, {
	getApartment: fetchApartment
})(Home);
```

now, we can call the action creator from the component like `this.props.getApartment()`

### installing and integrating redux-thunk

installation is like following
```
npm install --save redux-thunk
```

To integrate, we need to provide `thunk` as middleware while creating our `store`.

```
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));
```

### fetching data via network call

So far, we are using apartment data from local json file. But in real world scenario, we need to make api call to get the data.

So, lets fetch apartment data from our github repository. It's available in the following uri:
```
https://raw.githubusercontent.com/Cefalo/LetsLearnReact/master/airbnb/src/data.json
```

and now the action creator will be like this:

```
export const fetchFromGithub = () => {
    return async function fetchThenDispatch(dispatch) {
        const response = await fetch(APARTMENT_URL);
        const json = await response.json();
        dispatch({
            type: FETCH_APARTMENT,
            payload: json
        });
    }
}; 
```



