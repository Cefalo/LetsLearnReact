export default class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return `${this.name} is ${this.age} years old`;
    }
}