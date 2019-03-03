describe('Scenario', function () {
    var Scenario;
    var minConstant = {r: 1.0, g: 1.0, b: 1.0};
    var maxConstant = {r: 7.0, g: 7.0, b: 7.0};
    var constant = {r: 5.0, g: 5.0, b: 5.0};
    beforeEach(function () {
        Scenario = require('../lib/scenario.js');
    });

    describe('Red', function() {
        it('is a function', function () {
            console.assert(typeof Scenario.Red === 'function');
        });

        it('handles a perfect red constant', function () {
            constant.r = 5.0; 
            console.assert(!Scenario.Red(constant, minConstant, maxConstant));
        });

        it('handles a red constant above the maximum', function () {
            constant.r = 8.0; 
            console.assert(Scenario.Red(constant, minConstant, maxConstant));
        });

        it('handles a red constant below the minimum', function () {
            constant.r = 0.0; 
            console.assert(Scenario.Red(constant, minConstant, maxConstant));
        });
    });

    describe('Green', function() {
        it('is a function', function () {
            console.assert(typeof Scenario.Green === 'function');
        });
        
        it('handles a perfect green constant', function () {
            constant.g = 5.0; 
            console.assert(!Scenario.Green(constant, minConstant, maxConstant));
        });

        it('handles a green constant above the maximum', function () {
            constant.g = 8.0; 
            console.assert(Scenario.Green(constant, minConstant, maxConstant));
        });

        it('handles a green constant below the minimum', function () {
            constant.g = 0.0; 
            console.assert(Scenario.Green(constant, minConstant, maxConstant));
        });
    });
    describe('Blue', function() {
        it('is a function', function () {
            console.assert(typeof Scenario.Blue === 'function');
        });

        it('handles a perfect blue constant', function () {
            constant.b = 5.0; 
            console.assert(!Scenario.Blue(constant, minConstant, maxConstant));
        });

        it('handles a blue constant above the maximum', function () {
            constant.b = 8.0; 
            console.assert(Scenario.Blue(constant, minConstant, maxConstant));
        });

        it('handles a blue constant below the minimum', function () {
            constant.b = 0.0; 
            console.assert(Scenario.Blue(constant, minConstant, maxConstant));
        });
    });
    describe('RedGreen', function() {
        it('is a function', function () {
            console.assert(typeof Scenario.RedGreen === 'function');
        });

        it('handles a perfect red and green constant', function () {
            constant.r = 5.0; 
            constant.g = 5.0; 
            console.assert(!Scenario.RedGreen(constant, minConstant, maxConstant));
        });

        it('handles a red and green constant above the maximum', function () {
            constant.r = 8.0; 
            constant.g = 8.0; 
            console.assert(Scenario.RedGreen(constant, minConstant, maxConstant));
        });

        it('handles a red and green constant below the minimum', function () {
            constant.r = 0.0; 
            constant.g = 0.0; 
            console.assert(Scenario.RedGreen(constant, minConstant, maxConstant));
        });
    });
    describe('RedBlue', function() {
        it('is a function', function () {
            console.assert(typeof Scenario.RedBlue === 'function');
        });

        it('handles a perfect red and blue constant', function () {
            constant.r = 5.0; 
            constant.b = 5.0; 
            console.assert(!Scenario.RedBlue(constant, minConstant, maxConstant));
        });

        it('handles a red and blue constant above the maximum', function () {
            constant.r = 8.0; 
            constant.b = 8.0; 
            console.assert(Scenario.RedBlue(constant, minConstant, maxConstant));
        });

        it('handles a red and blue constant below the minimum', function () {
            constant.r = 0.0; 
            constant.b = 0.0; 
            console.assert(Scenario.RedBlue(constant, minConstant, maxConstant));
        });
    });

    describe('GreenBlue', function() {
        it('is a function', function () {
            console.assert(typeof Scenario.GreenBlue === 'function');
        });

        it('handles a perfect green and blue constant', function () {
            constant.g = 5.0; 
            constant.b = 5.0; 
            console.assert(!Scenario.GreenBlue(constant, minConstant, maxConstant));
        });

        it('handles a green and blue constant above the maximum', function () {
            constant.g = 8.0; 
            constant.b = 8.0; 
            console.assert(Scenario.GreenBlue(constant, minConstant, maxConstant));
        });

        it('handles a green and blue constant below the minimum', function () {
            constant.g = 0.0; 
            constant.b = 0.0; 
            console.assert(Scenario.GreenBlue(constant, minConstant, maxConstant));
        });
    });
});
