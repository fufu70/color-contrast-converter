describe('Calculate', function () {
    var Calculate;
    beforeEach(function () {
        Calculate = require('../lib/calculate.js');
    });

    describe('constant', function() {
        it('is a function', function () {
            console.assert(typeof Calculate.constant === 'function');
        });

        it('Handles a color and constant request', function () {
            console.assert(typeof Calculate.constant({r: 1.0, g: 1.0, g: 1.0}, 7.0) === 'object');
        });
    });
});
