"use strict";

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorHelper = colorHelper;
exports.hexRgb = rgbArray;
exports.hslToRgb = hslToRgb;
exports.rgbToHsl = rgbToHsl;

var _hexRgb = _interopRequireDefault(require("hex-rgb"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function colorHelper(hexColor) {
  let originalColor, currentColor;
  const colorUtils = {
    light,
    dark,
    lighten,
    darken,
    saturate,
    desaturate,
    increaseContrast,
    decreaseContrast,
    active,
    highlight,
    selected,
    text,
    shadow,
    hex,
    rgb,
    rgba,
    setHex,
    setRgb
  };
  setHex(hexColor);

  function setHex(hexColor = '#000000') {
    originalColor = rgbArray(hexColor);
    currentColor = originalColor;
    return colorUtils;
  }

  function setRgb(rgbArray = [0, 0, 0]) {
    let [r, g, b] = rgbArray;
    r = (0, _lodash.clamp)(r, 0, 255);
    g = (0, _lodash.clamp)(g, 0, 255);
    b = (0, _lodash.clamp)(b, 0, 255);
    originalColor = [r, g, b];
    currentColor = [r, g, b];
    return colorUtils;
  }

  function rgb() {
    const color = currentColor;
    currentColor = originalColor;
    return `rgb(${color.join()})`;
  }

  function rgba(alpha = 1) {
    const color = currentColor;
    currentColor = originalColor;
    return `rgba(${color.join()}, ${alpha})`;
  }

  function hex() {
    const color = currentColor;
    currentColor = originalColor;
    return '#' + color.map(val => parseInt(val + '', 10).toString(16).padStart(2, '0')).join('');
  }

  function dark() {
    const [r, g, b] = currentColor;
    return (r * 299 + g * 587 + b * 114) / 1000 < 128;
  }

  function light() {
    return !dark();
  }

  function darken(ratio = 0) {
    ratio *= -1;
    return lighten(ratio);
  }

  function desaturate(ratio = 0) {
    ratio *= -1;
    return saturate(ratio);
  }

  function lighten(ratio = 0) {
    let [h, s, l] = rgbToHsl(currentColor);
    l = (0, _lodash.clamp)(l + ratio, 0, 1);
    currentColor = hslToRgb([h, s, l]);
    return colorUtils;
  }

  function saturate(ratio = 0) {
    let [h, s, l] = rgbToHsl(currentColor);
    s = (0, _lodash.clamp)(s + ratio, 0, 1);
    currentColor = hslToRgb([h, s, l]);
    return colorUtils;
  }

  function text() {
    currentColor = light() ? rgbArray('#333333') : rgbArray('#FFFFFF');
    return colorUtils;
  }

  function shadow() {
    currentColor = light() ? rgbArray('#000000') : rgbArray('#FFFFFF');
    return colorUtils;
  }

  function decreaseContrast(ratio = 0) {
    if (light()) {
      return darken(ratio);
    } else {
      return lighten(ratio);
    }
  }

  function increaseContrast(ratio = 0) {
    ratio *= -1;
    return decreaseContrast(ratio);
  }

  function active() {
    return decreaseContrast(0.123);
  }

  function highlight() {
    return decreaseContrast(0.1);
  }

  function selected() {
    return decreaseContrast(0.066);
  }

  return colorUtils;
}

function rgbArray(color) {
  return (0, _hexRgb.default)(color);
}

function hslToRgb(hsl) {
  const [h, s, l] = hsl;
  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) {
        t += 1;
      }

      if (t > 1) {
        t -= 1;
      }

      if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
      }

      if (t < 0.5) {
        return q;
      }

      if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
      }

      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = (0, _lodash.clamp)(hue2rgb(p, q, h + 1 / 3), 0, 1);
    g = (0, _lodash.clamp)(hue2rgb(p, q, h), 0, 1);
    b = (0, _lodash.clamp)(hue2rgb(p, q, h - 1 / 3), 0, 1);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function rgbToHsl(rgb) {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = (max + min) / 2;
  let s = (max + min) / 2;
  const l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        h = (b - r) / d + 2;
        break;

      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return [h, s, l];
}
