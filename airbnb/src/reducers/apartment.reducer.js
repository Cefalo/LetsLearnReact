import {FETCH_APARTMENT} from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_APARTMENT:
            return action.payload;
        default:
            return state;
    }
}