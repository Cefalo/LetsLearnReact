import { expect } from 'chai';
import { constructAddress } from '../prod/7.object.literal';

(function () {
    "use strict";
    describe('Object literal', () => {
        it('if variable name & key name are same, do not need to provide key anymore :)', () => {
            expect(constructAddress('Dhaka', 'Bangladesh')).to.equal('{"city":"Dhaka","country":"Bangladesh"}');
        });
    });
}());