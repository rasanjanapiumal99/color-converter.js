# Hex to RGB and RGB to Hex Converter

This is a simple JavaScript utility to convert colors between Hexadecimal (Hex) and RGB formats.

## How to Use

### 1. Hex to RGB

The `hexToRgb()` function takes a Hex color code as input and returns the corresponding RGB color.

```javascript
const hexColor = "#FF0000";
const rgbColor = hexToRgb(hexColor);
console.log(rgbColor); // Output: "rgb(255, 0, 0)"
```

### 2. RGB to Hex

The `rgbToHex()` function takes an RGB color as input and returns the corresponding Hex color code.

```javascript
const rgbColor = "rgb(0, 255, 0)";
const hexColor = rgbToHex(rgbColor);
console.log(hexColor); // Output: "#00FF00"
```

## Usage and Contribution

Feel free to use this utility in your projects or modify it as needed. 
## License

This project is licensed under the [MIT License](LICENSE).
