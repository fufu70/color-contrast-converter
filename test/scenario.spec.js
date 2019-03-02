describe('add', function () {
    var Scenario;
    beforeEach(function () {
        Scenario = require('../lib/scenario.js');
    });
    it('Red is a function', function () {
        console.assert(typeof Scenario.Red === 'function');
    });
});
