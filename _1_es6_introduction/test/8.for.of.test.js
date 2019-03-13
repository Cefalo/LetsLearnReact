import { expect } from 'chai';
import {
    getSum,
    getFirstVowel
} from '../prod/8.for.of';

(function () {
    "use strict";
    describe('For of loop', () => {
        it('for of on array', () => {
            let values = [1,2,3];
            expect(getSum(values)).to.equal(6);
        });

        it('for of on string', () => {
            let str = "NEVER";
            expect(getFirstVowel(str)).to.equal('E');
        });
    });
}());