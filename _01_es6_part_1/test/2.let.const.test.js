import { expect } from 'chai';

(function () {
    "use strict";
    describe('var, let, const', () => {
        it('var is function scoped', () => {
            if ( 1 + 1 == 2 ) {
                var foo = 5;
            }
            expect(foo).to.equal(5);
        });

        it('let is block scoped', () => {
            if(true){
                let foobar = 5;
                expect(foobar).to.equal(5);
            }
            //expect(foobar).to.equal(5);
        });

        it('we cannot reassign const value', () => {
            const temp = 4;
            expect(temp).to.equal(4);
            //temp = 5;
        });
    });
}());