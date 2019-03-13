export function constructAddress(city, country) {
    let address = {city, country};
    return JSON.stringify(address);
}