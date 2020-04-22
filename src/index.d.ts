
export interface colorHelper {
    light: () => boolean;
    dark: () => boolean;
    lighten: (ratio?: number) => colorHelper;
    darken: (ratio?: number) => colorHelper;
    saturate: (ratio?: number) => colorHelper;
    desaturate: (ratio?: number) => colorHelper;
    increaseContrast: (ratio?: number) => colorHelper;
    decreaseContrast: (ratio?: number) => colorHelper;
    active: () => colorHelper;
    highlight: () => colorHelper;
    selected: () => colorHelper;
    text: () => colorHelper;
    shadow: () => colorHelper;
    hex: () => string;
    rgb: () => string;
    rgba: (alpha?: number) => string;
    setHex: (hexColor?: string) => colorHelper;
    setRgb: (rgbArray?: number[]) => colorHelper;
};

/**
 * @param {string} hexColor - original hex value color #XXXXXX
 */
export function colorHelper(hexColor: string): colorHelper
export function hslToRgb(hsl: number[]): number[];
export function rgbToHsl(rgb: number[]): number[];
export { rgbArray as hexRgb };
declare function rgbArray(color: string): any;
