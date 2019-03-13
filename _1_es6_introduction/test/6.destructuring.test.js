import { expect } from 'chai';
import {
    destructuringArray,
    destructuringObject,
    getFullName
} from '../prod/6.destructuring';

(function () {
    "use strict";
    let values = [1, 2, 3, 4, 5];
    let names = {
        firstName: "Muhammad",
        middleName: "Bin",
        lastName: "Kawnayeen"
    };
    describe('Destructing', () => {
        it('first should be 1', () => {
            expect(destructuringArray(values)).to.equal(1);
        });
        it('first name should be Muhammad', () => {
            expect(destructuringObject(names)).to.equal('Muhammad');
        });
        it('display name should be Muhammad Bin Kawnayeen', () => {
            expect(getFullName(names)).to.equal('Muhammad Bin Kawnayeen');
        });
    });
}());