/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Compare two version numbers version1 and version2.
 * If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.
 * You may assume that the version strings are non-empty and contain only digits and the . character.
 * The . character does not represent a decimal point and is used to separate number sequences.
 * For instance, 2.5 is not "two and a half" or "half way to version three",
 * it is the fifth second-level revision of the second first-level revision.
 *
 * Example:
 * 0.1 < 1.1 < 1.2 < 13.37
 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const v1s = version1.split('.');
  const v2s = version2.split('.');
  const allZero = nums => nums.every(number => Number(number) === 0);

  while (v1s.length && v2s.length) {
    const num1 = Number(v1s.shift());
    const num2 = Number(v2s.shift());

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1
    }
  }
  if (!v1s.length && !v2s.length) return 0;
  if (v1s.length && !allZero(v1s)) return 1;
  if (v2s.length && !allZero(v2s)) return -1;
  return 0;
};
