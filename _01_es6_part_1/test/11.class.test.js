import { expect } from 'chai';
import JustAnyone from '../prod/11.class';

(function () {
    "use strict";
    describe('Class', () => {
        it('should be able to create object of a class', () => {
            let person = new JustAnyone('Anan', 9);
            expect(person).to.be.an('object');
            expect(person.toString()).to.equal('Anan is 9 years old');
        });
    });
}());