export function destructuringArray(arr) {
    let [a, b, ...rest] = arr;
    // console.log('rest is array of remaining');
    // console.log(rest);
    return a;
}

export function destructuringObject(obj) {
    let {firstName, ...rest} = obj;
    // console.log('rest is remaining object');
    // console.log(rest);
    return firstName;
}

export function getFirstName({firstName}) {
    return firstName;
}

export function getMiddleName({middleName}) {
    return middleName;
}

export function getLastName({lastName}) {
    return lastName;
}

export function getFullName({firstName, middleName, lastName}) {
    return `${firstName} ${middleName} ${lastName}`;
}