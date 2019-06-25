import {combineReducers} from 'redux';
import apartmentReducer from './apartment.reducer';

export default combineReducers({
    apartments: apartmentReducer
});