import apartments from '../data';

export const FETCH_APARTMENT = 'FETCH_APARTMENT';
export const SEARCH_APARTMENT = 'SEARCH_APARTMENT';
const APARTMENT_URL = 'https://raw.githubusercontent.com/Cefalo/LetsLearnReact/master/airbnb/src/data.json';

export const fetchApartment = () => {
    return {
        type: FETCH_APARTMENT,
        payload: apartments
    };
};

export const fetchFromGithub = () => {
    return async function fetchThenDispatch(dispatch) {
        const response = await fetch(APARTMENT_URL);
        const json = await response.json();
        dispatch({
            type: FETCH_APARTMENT,
            payload: json
        });

        dispatch({
            type: SEARCH_APARTMENT,
            payload: json
        });
    }
};

export const searchApartments = location => async (dispatch, getState) => {
    const searchedApartments = getState().apartments.filter(apartment => apartment.place.includes(location));
    dispatch({
        type: SEARCH_APARTMENT,
        payload: searchedApartments
    });
};