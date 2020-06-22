declare module "off-color" {

    export interface offColor {
        /** Returns true if the current color is a light shade, false if not */
        light: () => boolean;
        /** Opposite of light(). Returns true  if the current color is a dark shade, false if not. */
        dark: () => boolean;
        /** Lightens the current color by the input ratio (between 0 and 1). Sets the new color internally and returns the full collection of functions for chaining. */
        lighten: (ratio?: number) => offColor;
        /** Opposite of lighten. Darkens the current color by the input ratio (between 0 and 1). Sets the new color internally and returns the full collection of functions for chaining. */
        darken: (ratio?: number) => offColor;
        /** Increase saturation of the current color by the input ratio (between 0 and 1). Sets the new color internally and returns the full collection of functions for chaining. */
        saturate: (ratio?: number) => offColor;
        /** Opposite of  saturate. Decreases saturation of the current color by the input ratio (between 0 and 1). Sets the new color internally and returns the full collection of functions for chaining. */
        desaturate: (ratio?: number) => offColor;
        /** Increases color contrast with text. Lightens the color if it is already light, darkens it if it is dark. Sets the new color internally and returns the full collection of functions for chaining. */
        increaseContrast: (ratio?: number) => offColor;
        /** Opposite of increaseContrast. Darkens the color if it is light, lightens it if it is dark. Sets the new color internally and returns the full collection of functions for chaining. */
        decreaseContrast: (ratio?: number) => offColor;
        /** Runs decreaseContrast() with ratio preset at 0.123. Sets the new color internally and returns the full collection of functions for chaining. */
        active: () => offColor;
        /** Runs decreaseContrast() with ratio preset at 0.1. Sets the new color internally and returns the full collection of functions for chaining. */
        highlight: () => offColor;
        /** Runs decreaseContrast() with ratio preset at 0.066. Sets the new color internally and returns the full collection of functions for chaining. */
        selected: () => offColor;
        /** Sets the internal color to #333 if the color is currently light, #FFF if it is dark. Sets the new color internally and returns the full collection of functions for chaining. */
        text: () => offColor;
        /** Set the internal color to #000 if the  color is currently light, #FFF if it is dark. Sets the new color internally and returns the full collection of functions for chaining. */
        shadow: () => offColor;
        /** Returns the current color in hex format '#xxxxxx' and resets the internal color to the original input color. */
        hex: () => string;
        /** Returns the current color in the format 'rgb(r, g, b)' and resets the internal color to the original input color. */
        rgb: () => string;
        /** Returns the current color in the format 'rgba(r,g,b, alpha)' and resets the internal color to the original input color. */
        rgba: (alpha?: number) => string;
        /** Optional way to set the color after initially invoking the function. */
        setHex: (hexColor?: string) => offColor;
        /** Allows for setting the internal color using RGB values. */
        setRgb: (rgbArray?: number[]) => offColor;
    }

    /**
     * A useful set of chainable functions for adjusting shades of color and getting values back in hex, rgb, or rgba format.
     * @param {string} hexColor - original hex value color #XXXXXX
     */
    export { color as offColor };
    export function color(hexColor: string): offColor;
    export function hslToRgb(hsl: number[]): number[];
    export function rgbToHsl(rgb: number[]): number[];
    export { rgbArray as hexRgb };
    function rgbArray(color: string): number[];

}
