import { expect } from 'chai';
import Bangladeshi from '../prod/12.inheritance';

(function () {
    "use strict";
    describe('Inheritance', () => {
        it('extending super class and overriding method', () => {
            let person = new Bangladeshi('Anan', 9);
            expect(person.toString()).to.equal("I'm Anan, Bangladeshi kid");
        });
    });
}());