/**
 * Generates a random number between min and max.
 * @param {number} min - The minimum value (default is 0).
 * @param {number} max - The maximum value (default is 10).
 * @returns {number} A random number between min and max.
 */

export function getRandomNumber(min: number = 0, max: number = 10): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
