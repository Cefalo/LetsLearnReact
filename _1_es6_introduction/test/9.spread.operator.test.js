import { expect } from 'chai';
import { addSevenAtStart } from '../prod/9.spread.operator';
import { getSum } from '../prod/8.for.of';

(function () {
    "use strict";
    describe('Spread operator', () => {
        it('create new array by spreading', () => {
            let values = [1,2,3];
            let spreadedArr = addSevenAtStart(values)
            expect(getSum(spreadedArr)).to.equal(13);
        });
    });
}());