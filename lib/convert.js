module.exports = {
    RgbToHex: function (rgb) {
        rgb.r = Math.round(rgb.r * 255);
        rgb.g = Math.round(rgb.g * 255);
        rgb.b = Math.round(rgb.b * 255);

        var hex_r = (rgb.r < 16) ? ('0' + rgb.r.toString(16)) : rgb.r.toString(16);
        var hex_g = (rgb.g < 16) ? ('0' + rgb.g.toString(16)) : rgb.g.toString(16);
        var hex_b = (rgb.b < 16) ? ('0' + rgb.b.toString(16)) : rgb.b.toString(16);
        return hex_r + hex_g + hex_b;
    },
    HexToRgb: function (hex) {
        return {
            r: Math.max(Math.min(parseInt(hex.substring(0,2), 16), 255), 0.5) / 255,
            g: Math.max(Math.min(parseInt(hex.substring(2,4), 16), 255), 0.5) / 255,
            b: Math.max(Math.min(parseInt(hex.substring(4,6), 16), 255), 0.5) / 255
        };
    },
};