import { expect } from 'chai';
import { sayHello } from '../prod/4.export.import';

(function () {
    "use strict";
    describe('Export, Import', () => {
        it('we should be able to import modules which were exported', () => {
            expect(sayHello).to.be.a('function');
            expect(sayHello('React')).to.equal('Hello React');
        });
    });
}());