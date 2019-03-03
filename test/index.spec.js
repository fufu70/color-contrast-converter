describe('Index', function () {
    var Converter;
    beforeEach(function () {
        Converter = require('../lib/index.js');
    });

    describe('Convert', function() {
        it('is a function', function () {
            console.assert(typeof Converter.Convert === 'function');
        });

        it('converts white to black', function () {
            var black = Converter.Convert({r: 1.0, g: 1.0, b: 1.0}, 21.0);
            console.assert(black.r <= 0.0002);
            console.assert(black.g <= 0.0002);
            console.assert(black.b <= 0.0002);
        });

        it('converts black to white', function () {
            var white = Converter.Convert({r: 0.0, g: 0.0, b: 0.0}, 1.0);
            console.assert(white.r >= 0.999);
            console.assert(white.g >= 0.999);
            console.assert(white.b >= 0.999);
        });

        it('converts dark grey to a lighter gray :P', function () {
            var grey = Converter.Convert({r: 0.003131594552688991, g: 0.003131594552688991, b: 0.003131594552688991}, 5.0);
            console.assert(grey.r >= 0.42);
            console.assert(grey.g >= 0.42);
            console.assert(grey.b >= 0.42);
        });

        it('converts dark grey to a darker gray :P', function () {
            var grey = Converter.Convert({r: 0.04045, g: 0.04045, b: 0.04045}, 20.0);
            console.assert(grey.r >= 0.032);
            console.assert(grey.g >= 0.032);
            console.assert(grey.b >= 0.032);
        });
    });
});
