import { expect } from 'chai';

(function () {
    "use strict";

    // example of arrow function
    var courseName = function () {
        return "Let's learn react";
    };

    var courseNameAgain = () => "Let's learn react";

    describe('Arrow function example', () => {
        it('"courseName" & "courseNameAgain" should be equal', () => {
            expect(courseName()).to.equal(courseNameAgain());
        });
    });

    // non binding this
    function nonBindingThis() {
        this.year = 2019;

        setTimeout(function nextYear() {
            this.year++;
        }, 1000);

        setTimeout(() => {
            this.year++;
        }, 1000);

        setTimeout(()=>{
            describe('Non binding this at Arrow function', () => {
                it('Year should be 2020', () => {
                    expect(this.year).to.equal(2020);
                })
            });
        }, 3050);
    }

    new nonBindingThis();
}());