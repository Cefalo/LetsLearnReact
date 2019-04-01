import {expect} from 'chai';

(function () {
    "use strict";
    describe('data types', () => {

        it('Number', () => {
            let foo = 42;
            expect(foo).to.be.a('number');
        });


        it('String', () => {
            let foo = 'foo';
            expect(foo).to.be.a('string');
        });

        it('boolean', () => {
            let foo = true;
            expect(foo).to.be.a('boolean');
        });

        it('null', () => {
            let foo = null;
            expect(foo).to.be.a('null');
        });

        it('undefined', () => {
            let foo;
            expect(foo).to.be.an('undefined');
        });

        it('object', () => {
            let foo = {
                a: 1
            };
            expect(foo).to.be.an('object');
        });
    });
}());