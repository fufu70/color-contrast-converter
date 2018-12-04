const Calculate = require('./calculate.js');
const Convert = require('./convert.js');

function reverseTransformation(c) {
    if (c < 0.0002) {
        return 0.0002;
    } else if (c > 0.04045) {
        return Math.pow((c + 0.055) / (1.055), 2.4);
    } else {
        return c / 12.92;
    }
}

function transformation(c) {
    if (c < 0.0002) {
        return 0.0002;
    } else if (c > 0.003131594552688991) {
        return (Math.pow(c, 1 / 2.4) * 1.055) - 0.055;
    } else {
        return c * 12.92;
    }
}

module.exports = {
    Convert: function(color, contrast) {
        color.r = reverseTransformation(color.r);
        color.g = reverseTransformation(color.g);
        color.b = reverseTransformation(color.b);

        var constant = Calculate.constant(color, contrast);

        return {
            r: transformation(constant.r * color.r),
            g: transformation(constant.g * color.g),
            b: transformation(constant.b * color.b),
        }
    }
};
