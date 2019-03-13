import { expect } from 'chai';
import { variableLengthArguments } from '../prod/10.rest.operator';

(function () {
    "use strict";
    describe('Rest operator', () => {
        it('necessary when we do not want to pass an array as argument, still want variable number of argument', () => {
            variableLengthArguments(1,2);
            variableLengthArguments(3,6,7);
        });
    });
}());