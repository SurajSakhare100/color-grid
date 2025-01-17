// color.js

class Color {
    constructor(color) {
      this.color = this.parseColor(color);
    }
  
    parseColor(color) {
      // If the color contains alpha, handle it differently
      if (color.startsWith('rgba')) {
        return this.rgbaToRgb(color);
      } else if (color.startsWith('#')) {
        return this.hexToRgb(color);
      }
      return this.hexToRgb(color); // Default to HEX to RGB conversion
    }
  
    // HEX to RGB
    hexToRgb(hex) {
      let r = parseInt(hex.slice(1, 3), 16);
      let g = parseInt(hex.slice(3, 5), 16);
      let b = parseInt(hex.slice(5, 7), 16);
      return { r, g, b, a: 1 }; // Default alpha is 1 (fully opaque)
    }
  
    // RGB to HEX
    rgbToHex(r, g, b) {
      return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
    }
  
    // Convert RGBA string to RGB
    rgbaToRgb(rgba) {
      const parts = rgba.match(/rgba?\((\d+), (\d+), (\d+), (\d*\.?\d+)\)/);
      let r = parseInt(parts[1]);
      let g = parseInt(parts[2]);
      let b = parseInt(parts[3]);
      let a = parseFloat(parts[4]);
      return { r, g, b, a };
    }
  
    // HEX to HSL
    hexToHsl(hex) {
      let { r, g, b } = this.hexToRgb(hex);
      r /= 255;
      g /= 255;
      b /= 255;
  
      let max = Math.max(r, g, b),
          min = Math.min(r, g, b);
      let h, s, l = (max + min) / 2;
  
      if (max === min) {
        h = s = 0; // achromatic
      } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }
  
      return { h: h * 360, s: s * 100, l: l * 100, a: 1 }; // Default alpha is 1 (fully opaque)
    }
  
    // RGB to HSL
    rgbToHsl(r, g, b) {
      let { h, s, l } = this.hexToHsl(this.rgbToHex(r, g, b));
      return { h, s, l, a: 1 }; // Default alpha is 1 (fully opaque)
    }
  
    // HSL to RGB
    hslToRgb(h, s, l) {
      s /= 100;
      l /= 100;
  
      let c = (1 - Math.abs(2 * l - 1)) * s;
      let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
      let m = l - c / 2;
  
      let r, g, b;
      if (0 <= h && h < 60) {
        r = c; g = x; b = 0;
      } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
      } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
      } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
      } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
      } else {
        r = c; g = 0; b = x;
      }
  
      return { r: Math.round((r + m) * 255), g: Math.round((g + m) * 255), b: Math.round((b + m) * 255) };
    }
  
    // HSL to HEX
    hslToHex(h, s, l) {
      let { r, g, b } = this.hslToRgb(h, s, l);
      return this.rgbToHex(r, g, b);
    }
  
    // Adjust the alpha value
    alpha(value) {
      this.color.a = value; // Set the alpha (opacity)
      return this;
    }
  
    // Lighten the color by a percentage
    lighten(amount) {
      const { h, s, l } = this.hexToHsl(this.rgbToHex(this.color.r, this.color.g, this.color.b));
      const newLightness = Math.min(l + amount, 100); // Ensure lightness is within 0-100%
      return new Color(this.hslToHex(h, s, newLightness)); // Return the new color
    }
  
    // Convert to RGBA format
    toRgba() {
      return `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a})`;
    }
  
    // Convert to RGB format
    toRgb() {
      return `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
    }
  
    // Convert to HEX format
    toHex() {
      return this.rgbToHex(this.color.r, this.color.g, this.color.b);
    }
  
    // Convert to HSL format
    toHsl() {
      const { h, s, l } = this.hexToHsl(this.rgbToHex(this.color.r, this.color.g, this.color.b));
      return `hsl(${h}, ${s}%, ${l}%)`;
    }
  }
  
  export default Color;  // Using ES6 export
  