import { expect } from 'chai';
import {
    getSurahListAsync
} from '../prod/14.async.await';

(function () {
    "use strict";

    describe('Async - Await', () => {
        it('wait till the async call is done', () => {
            getSurahListAsync();
        });
    });
}());