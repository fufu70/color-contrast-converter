const Scenario = require('./scenario.js');

const MIN_CONSTANT_VALUE = 0.001 / 256;

function MinConstant(color) {
    return {
        r: MIN_CONSTANT_VALUE / color.r,
        g: MIN_CONSTANT_VALUE / color.g,
        b: MIN_CONSTANT_VALUE / color.b,
    };
}

function MaxConstant(color) {
    return {
        r: 1 / color.r,
        g: 1 / color.g,
        b: 1 / color.b,
    };
}

function set(channelValue, constantValue) {
    if ((1 / channelValue) < constantValue) {
        return 1 / channelValue;
    } else if (MIN_CONSTANT_VALUE / channelValue > constantValue) {
        return MIN_CONSTANT_VALUE / channelValue;
    } else {
        return constantValue;
    }
}

// scenario 1
function greenBlueConstant(color, dRL, cr) {
    return (dRL - (0.2126 * color.r * cr)) / ((0.7152 * color.g) + (0.0722 * color.b));
}

// scenario 2
function redBlueConstant(color, dRL, cg) {
    return (dRL - (0.7152 * color.g * cg)) / ((0.2126 * color.r) + (0.0722 * color.b));
}

// scenario 3
function redGreenConstant(color, dRL, cb) {
    return (dRL - (0.0722 * color.b * cb)) / ((0.2126 * color.r) + (0.7152 * color.g));
}

// scenario 4
function blueConstant(color, dRL, cr, cg) {
    return (dRL - (0.2126 * color.r * cr) - (0.7152 * color.g * cg)) / (0.0722 * color.b);
}

// scenario 5
function greenConstant(color, dRL, cr, cb) {
    return (dRL - (0.2126 * color.r * cr) - (0.0722 * color.b * cb)) / (0.7152 * color.g);
}

// scenario 6
function redConstant(color, dRL, cg, cb) {
    return (dRL - (0.7152 * color.g * cg) - (0.0722 * color.b * cb)) / (0.2126 * color.r);
}

function desiredRelativeLuminance(contrast) {
    return (1.05 / contrast) - 0.05;
}

function luminanceConstant(color, dRL) {
    var channelConstant = dRL / ((0.2126 * color.r) + (0.7152 * color.g) + (0.0722 * color.b));

    return {
        r: channelConstant,
        g: channelConstant,
        b: channelConstant,
    };
}

module.exports = {
    constant: function(color, contrast) {
        var dRL = desiredRelativeLuminance(contrast);

        var constant = luminanceConstant(color, dRL);
        var minConstant = MinConstant(color);
        var maxConstant = MaxConstant(color);

        if (Scenario.GreenBlue(constant, minConstant, maxConstant)) {
            constant.g = set(color.g, constant.g);
            constant.b = set(color.b, constant.b);

            constant.r = redConstant(color, dRL, constant.g, constant.b);
        } else if (Scenario.RedBlue(constant, minConstant, maxConstant)) {
            constant.r = set(color.r, constant.r);
            constant.b = set(color.b, constant.b);

            constant.g = greenConstant(color, dRL, constant.r, constant.b);
        } else if (Scenario.RedGreen(constant, minConstant, maxConstant)) {
            constant.r = set(color.r, constant.r);
            constant.g = set(color.g, constant.g);
            
            constant.b = blueConstant(color, dRL, constant.r, constant.g);
        } else if (Scenario.Blue(constant, minConstant, maxConstant)) {
            constant.b = set(color.b, constant.b);
            
            constant.r = redGreenConstant(color, dRL, constant.b);
            constant.g = constant.r;
        } else if (Scenario.Green(constant, minConstant, maxConstant)) {
            constant.g = set(color.g, constant.g);

            constant.r = redBlueConstant(color, dRL, constant.g);
            constant.b = constant.r;
        } else if (Scenario.Red(constant, minConstant, maxConstant)) {
            constant.r = set(color.r, constant.r);

            constant.g = greenBlueConstant(color, dRL, constant.r);
            constant.b = constant.g;
        }

        return {
            r: constant.r,
            g: constant.g,
            b: constant.b,
        };
    }
}