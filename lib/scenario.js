/**
 * Contains all possible scenarios for contrast conversions.
 */


function Red(constant, minConstant, maxConstant) {
    return minConstant.r > constant.r || maxConstant.r < constant.r;
}

function Green(constant, minConstant, maxConstant) {
    return minConstant.g > constant.g || maxConstant.g < constant.g;
}

function Blue(constant, minConstant, maxConstant) {
    return minConstant.b > constant.b || maxConstant.b < constant.b;
}

module.exports = {
    Red: Red,
    Green: Green,
    Blue: Blue,
    RedGreen: function(constant, minConstant, maxConstant) {
        return Red(constant, minConstant, maxConstant) && Green(constant, minConstant, maxConstant);
    },
    RedBlue: function(constant, minConstant, maxConstant) {
        return Red(constant, minConstant, maxConstant) && Blue(constant, minConstant, maxConstant);
    },
    GreenBlue: function(constant, minConstant, maxConstant) {
        return Green(constant, minConstant, maxConstant) && Blue(constant, minConstant, maxConstant);
    }
};