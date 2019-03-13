export function getSum(values) {
    let sum = 0;
    for (const val of values)
        sum += val;
    return sum;
}

export function getFirstVowel(str) {
    for (const char of str) {
        if(isVowel(char))
            return char;
    }
    return '404';
}

function isVowel(ch) {
    return (ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U');
}