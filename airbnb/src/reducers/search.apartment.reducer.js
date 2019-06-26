import {SEARCH_APARTMENT} from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case SEARCH_APARTMENT:
            return action.payload;
        default:
            return state;
    }
}