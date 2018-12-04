# color-contrast-converter
Converts a RGG color, of a specific base palette, to a desired contrast value. This allows any primary color to be [WCAG 2.0 Level AAA accessible](https://www.w3.org/TR/WCAG20/#visual-audio-contrast7).

## Usage

Import the library and call the convert color by providing a RGB object, `{r: 0.5, g: 0.0, b: 0.5}`, and a contrast value between 1 and 21. It will return another rgb value that reflects the provided color and desired contrast that the provided color should be in. 

```
const Converter = require('color-contrast-converter');

var convertedColor = Converter.convert({r: 0.5, g: 0.0, b: 0.5}, 4.5);
```
