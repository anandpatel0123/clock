/**
 * Returns CSS font setting string for use in canvas context.
 *
 * @private
 * @param {string | string[]} fontFace
 * @param {string} fontStyle
 * @param {number} fontSize
 * @param {number} precision
 * @param {string} defaultFontFace
 * @returns {string}
 */
export function getFontSetting(fontFace: string | string[], fontStyle: string, fontSize: number, precision: number, defaultFontFace: string): string;
/**
 * Splits a string into an array of spaces and words.
 *
 * @remarks
 * This method always returns an array with an even length.
 *
 * - The **even indices** are the group of spaces that occur before the word at the
 *   next (odd) index.
 * - The **odd indices** are the words.
 *
 * If the string does not begin with a space, the first element of the array will
 * be an empty string ("").
 *
 * @param {string} text
 * @returns
 */
export function splitWords(text: string): string[];
/**
 * Returns true if the given character is a zero-width space.
 *
 * @param {string} space
 * @returns {boolean}
 */
export function isZeroWidthSpace(space: string): boolean;
/**
 * Returns true if the given character is a zero-width space or a regular space.
 *
 * @param {string} space
 * @returns {boolean}
 */
export function isSpace(space: string): boolean;
//# sourceMappingURL=TextTextureRendererUtils.d.mts.map