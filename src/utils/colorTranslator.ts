const colorMap: { [key: string]: string } = {
  // Basic Colors
  'rojo': 'red',
  'azul': 'blue',
  'verde': 'green',
  'amarillo': 'yellow',
  'naranja': 'orange',
  'morado': 'purple',
  'rosa': 'pink',
  'rosado': 'pink',
  'blanco': 'white',
  'negro': 'black',
  'gris': 'gray', // or 'gray'
  'marrón': 'brown',
  'café': 'brown', // common in some regions
  'beige': 'beige',
  'cyan': 'cyan',
  'celeste': 'lightblue',
  'magenta': 'magenta',

  // Tones and Shades
  'oscuro': 'dark',
  'claro': 'light',
  'plateado': 'silver',
  'dorado': 'gold',
  'turquesa': 'turquoise',
  'índigo': 'indigo',
  'lavanda': 'lavender',
  'granate': 'maroon',
  'oliva': 'olive',
  'menta': 'mint',
  'coral': 'coral',
  'borgoña': 'burgundy',
  'mostaza': 'mustard',
  'salmon': 'salmon',
  'crema': 'cream'
};

/**
 * Translates a Spanish color name to its English equivalent.
 * @param {string} spanishColor - The color name in Spanish (case-insensitive).
 * @returns {string} The color name in English. Returns the input if no translation is found.
 */
export function translateColor(spanishColor: string): string {
  if (!spanishColor) return spanishColor;
  // Convert to lowercase to make the lookup case-insensitive
  const key = spanishColor.toLowerCase().trim();
  return colorMap[key] || spanishColor; // Return the original if not found
}
