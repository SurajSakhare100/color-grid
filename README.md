# color-grid

`color-grid` is a lightweight JavaScript class for color manipulation. It supports converting colors between various formats, including HEX, RGB, RGBA, and HSL. You can also modify color attributes like alpha (opacity) and lightness.
## Installation

To use `color-grid` in your project, you can install it using npm:

```bash
npm install color-grid
```
## Features


- **HEX to RGB Conversion**
- **RGB to HEX Conversion**
- **RGBA to RGB Conversion**
- **HEX to HSL Conversion**
- **RGB to HSL Conversion**
- **HSL to RGB Conversion**
- **HSL to HEX Conversion**
- **Lighten a Color**
- **Adjust Alpha Transparency**
- **Get Color in HEX, RGB, RGBA, and HSL formats**
## Usage

### Creating a Color Instance

You can create a new `Color` instance by passing a color string in one of the following formats: HEX, RGB, RGBA, or HSL:

```javascript
const color1 = new Color('#ff5733');
const color2 = new Color('rgb(255, 87, 51)');
const color3 = new Color('rgba(255, 87, 51, 0.8)');
const color4 = new Color('hsl(9, 100%, 60%)');
```

### Convert Color Formats
#### HEX to RGB
Convert a HEX color value to RGB format.

```javascript
const rgb = color1.toRgb();  // "rgb(255, 87, 51)"
```

#### RGB to HEX
Convert an RGB color value to HEX format.

```javascript
const hex = color1.toHex();  // "#FF5733"
```

#### RGBA to RGB
Convert an RGBA color value to RGB format (removes the alpha channel).

```javascript
const rgbFromRgba = color3.toRgb();  // "rgb(255, 87, 51)"

```

#### RGB to HSL
Convert an RGB color value to HSL format.
```javascript
const hsl = color1.toHsl();  // "hsl(9, 100%, 60%)"
```
#### HEX to HSL
Convert a HEX color value to HSL format.
```javascript
const hslFromHex = color1.toHsl();  // "hsl(9, 100%, 60%)"
```
## Modify the Color
### Adjust Alpha (Opacity)
You can adjust the alpha (opacity) value of the color by passing a value between 0 (fully transparent) and 1 (fully opaque):

```javascript
color1.alpha(0.5);
console.log(color1.toRgba());  // "rgba(255, 87, 51, 0.5)"

```
## Lighten the Color
You can lighten the color by a percentage. The amount should be a number between 0 and 100.

```javascript
const lighterColor = color1.lighten(20);  // Lightens the color by 20%
console.log(lighterColor.toHex());  // New lighter HEX colo
```

## Output Format
### To RGBA
```javascript
const rgbaColor = color1.toRgba();  // "rgba(255, 87, 51, 1)"
```
### To RGB
```javascript
const rgbColor = color1.toRgb();  // "rgb(255, 87, 51)"
```
### To HEX
```javascript
const hexColor = color1.toHex();  // "#FF5733"
```
### To HSL
```javascript
const hslColor = color1.toHsl();  // "hsl(9, 100%, 60%)"
```

This section will explain how to use the `color-grid` package and its methods for color manipulation, with proper syntax and examples formatted for Markdown.
