describe('Calculate', function () {
    var Calculate;
    beforeEach(function () {
        Calculate = require('../lib/calculate.js');
    });

    describe('constant', function() {
        it('is a function', function () {
            console.assert(typeof Calculate.constant === 'function');
        });

        it('handles a color and constant request', function () {
            console.assert(typeof Calculate.constant({r: 1.0, g: 1.0, b: 1.0}, 7.0) === 'object');
        });

        it('handles a pure blue color and constant request', function () {
            console.assert(typeof Calculate.constant({r: 0.0, g: 0.0, b: 1.0}, 10.0) === 'object');
        });

        it('handles a pure green color and constant request', function () {
            console.assert(typeof Calculate.constant({r: 0.0, g: 1.0, b: 0.0}, 7.0) === 'object');
        });

        it('handles a pure red color and constant request', function () {
            console.assert(typeof Calculate.constant({r: 1.0, g: 0.0, b: 0.0}, 7.0) === 'object');
        });

        it('handles a pure red green color and constant request', function () {
            console.assert(typeof Calculate.constant({r: 1.0, g: 1.0, b: 0.0}, 7.0) === 'object');
        });

        it('handles a pure red blue color and constant request', function () {
            console.assert(typeof Calculate.constant({r: 1.0, g: 0.0, b: 1.0}, 7.0) === 'object');
        });

        it('handles a pure green blue color and constant request', function () {
            console.assert(typeof Calculate.constant({r: 0.0, g: 1.0, b: 1.0}, 7.0) === 'object');
        });

        it('sets a color that falls below the constant channel', function () {
            console.assert(typeof Calculate.constant({r: 0.0, g: 0.0, b: 1.0}, 7.0) === 'object');
        });
    });
});
