/**
 * Formats the given time in seconds to a string in the format "MM:SS".
 *
 * @param {number} timeInSeconds - The time in seconds to format
 * @returns {string} The formatted time string
 */
export function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds - minutes * 60;

  return `${minutes}:${padZeroes(seconds)}`;
}

/**
 * Pads the given value with leading zeroes if necessary.
 *
 * @param {number} value - The value to pad with zeroes
 * @returns {string} The padded value as a string
 */
export function padZeroes(value) {
  return "00".substring(value < 10 ? 1 : 2) + value;
}
