# Color-Helper 
##  Color utility functions

To use as a dependency in your project:
```
npm i color-helper
```

To use in a component, modules, styled component, etc.

```
import { colorHelper } from 'color-helper'

...

const header = colorHelper('#3768af');
const headerText = header.text().hex();
const darkHeader = header.darken(0.3).hex();
// note calling .hex() outputs the darkened color value but resets the internal color to the original,
// so when desaturate is called on the next line it is operating on the original input color
const headerAlt = header.desaturate(0.1).rgba(0.5);
```

Use it directly in styled components
```
...
background: ${props => colorHelper(props.theme.primary).rgba(0.5)};
```

colorHelper takes a hex value string and returns an object with a collection of chainable functions that can manipulate the initial input color, and output the value in a hex, rgb, or rgba string value.

Available functions include:
* `light()` / `dark()` - return boolean if the current internal color is light or dark
* `hex()`, `rgb()`, `rgba([alpha])` - output the current internal color as a string, e.g. #3768af or rgba(0, 0, 0, 0.2). If the internal color has been changed, it is reset to the original value when these functions are called.
* `lighten([ratio])`, `darken([ratio])` - take a number between 0 and 1 as a percentage amount by which to lighten or darken the color
* `saturate([ratio])`, `desaturate([ratio])` - take a number between 0 and 1 as a percentage amount by which to increase or decrease saturation
* `increaseContrast([ratio])`, `decreaseContrast([ratio])` - take a number between 0 and 1 and will lighten or darken the color depending on whether it is already light or dark. 

