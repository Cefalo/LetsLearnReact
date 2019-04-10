import {expect} from 'chai';
import {getEvenSum, getOddSum, getSum, getDoubleOddSum} from '../prod/15.going.functional';

(function () {
    "use strict";
    let values = [1, 2, 3, 4, 5];

    describe('array sum', () => {
        it('summation should be 15', () => {
            expect(getSum(values)).to.equal(15);
        });
        it('summation of even numbers should be 6', () => {
            expect(getEvenSum(values)).to.equal(6);
        });
        it('summation of odd numbers should be 9', () => {
            expect(getOddSum(values)).to.equal(9);
        });
        it('summation of double of the odd numbers should be 18', () => {
            expect(getDoubleOddSum(values)).to.equal(18);
        });
    });
}());