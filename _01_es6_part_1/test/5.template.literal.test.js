import { expect } from 'chai';
import { sayHello } from '../prod/5.template.literal';

(function () {
    "use strict";
    describe('Template literal', () => {
        it('built in templating in es6', () => {
            expect(sayHello('React')).to.equal('Hello React');
        });
    });
}());