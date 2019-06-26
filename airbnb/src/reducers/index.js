import {combineReducers} from 'redux';
import apartmentReducer from './apartment.reducer';
import searchApartmentReducer from './search.apartment.reducer';

export default combineReducers({
    apartments: apartmentReducer,
    searchedApartment: searchApartmentReducer
});