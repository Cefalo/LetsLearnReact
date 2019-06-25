import apartments from '../data';

export const FETCH_APARTMENT = 'FETCH_APARTMENT';

export const fetchApartment = () => {
    return {
        type: FETCH_APARTMENT,
        payload: apartments
    };
};