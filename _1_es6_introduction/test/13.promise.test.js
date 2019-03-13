import { expect } from 'chai';
import {
    getSurahListUsingPromise
} from '../prod/13.promise';

(function () {
    "use strict";
    describe('Promise', () => {
        it('do your regular work, will notify when done', () => {
            getSurahListUsingPromise();
        });
    });
}());