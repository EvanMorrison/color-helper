declare module "off-color" {

    export interface offColor {
        light: () => boolean;
        dark: () => boolean;
        lighten: (ratio?: number) => offColor;
        darken: (ratio?: number) => offColor;
        saturate: (ratio?: number) => offColor;
        desaturate: (ratio?: number) => offColor;
        increaseContrast: (ratio?: number) => offColor;
        decreaseContrast: (ratio?: number) => offColor;
        active: () => offColor;
        highlight: () => offColor;
        selected: () => offColor;
        text: () => offColor;
        shadow: () => offColor;
        hex: () => string;
        rgb: () => string;
        rgba: (alpha?: number) => string;
        setHex: (hexColor?: string) => offColor;
        setRgb: (rgbArray?: number[]) => offColor;
    }

    /**
     * @param {string} hexColor - original hex value color #XXXXXX
     */
    export function offColor(hexColor: string): offColor
    export function hslToRgb(hsl: number[]): number[];
    export function rgbToHsl(rgb: number[]): number[];
    export { rgbArray as hexRgb };
    function rgbArray(color: string): any;

}
