# color-contrast-converter
Converts a RGG color, of a specific base palette, to a desired contrast value. This allows any primary color to be [WCAG 2.0 Level AAA accessible](https://www.w3.org/TR/WCAG20/#visual-audio-contrast7).

## Usage

Import the library and call the convert color by providing a RGB object, `{r: 0.5, g: 0.0, b: 0.5}`, and a contrast value between 1 and 21. It will return another rgb value that reflects the provided color and desired contrast that the provided color should be in. 

```
const Converter = require('color-contrast-converter');

var convertedColor = Converter.Convert({r: 0.0, g: 0.0, b: 1.0}, 4.5); // {r: 0.381, g: 0.381, b: 1.0}
```

## Code Coverage

Statements: 98.61% 
Branches:   97.22%
Functions:  100%
Lines:      98.61%

Code coverage calculates from `nyc` using `mocha`.