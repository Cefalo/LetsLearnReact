export function getSum(values) {
    return values.reduce((sum, val) => sum + val, 0);
}

export function getOddSum(values) {
    return values.filter(val => (val % 2) === 1).reduce((sum, val) => sum + val, 0);
}

export function getEvenSum(values) {
    return values.filter(val => (val % 2) === 0).reduce((sum, val) => sum + val, 0);
}