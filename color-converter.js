function rgbToHex(rgb) {
  // Extract the RGB components from the input string
  const regex = /(\d+),\s*(\d+),\s*(\d+)/;
  const match = rgb.match(regex);

  if (!match) {
    throw new Error('Invalid input format. Expected format: "rgb(r, g, b)".');
  }

  // Convert the RGB components to hexadecimal format
  const r = parseInt(match[1]).toString(16).padStart(2, '0');
  const g = parseInt(match[2]).toString(16).padStart(2, '0');
  const b = parseInt(match[3]).toString(16).padStart(2, '0');

  return `#${r}${g}${b}`;
}
function hexToRgb(hex) {
  // Remove '#' from the beginning if present
  hex = hex.replace(/^#/, '');

  // Convert the hex string to individual RGB components
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
}
