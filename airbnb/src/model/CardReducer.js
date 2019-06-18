import items from '../data';

export default apartmentId => {
    return items.filter(item => item.id == apartmentId)[0];
};