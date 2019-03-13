import Person from './11.class';

export default class Bangladeshi extends Person {
    constructor(name, age) {
        super(name, age);
    }

    toString() {
        if (this.age < 18) {
            return `I'm ${this.name}, Bangladeshi kid`;
        } else
            return `I'm ${this.name}, Bangladeshi adult`;
    }
}