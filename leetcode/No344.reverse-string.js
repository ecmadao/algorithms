/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Write a function that takes a string as input and returns the string reversed.
 *
 * Example:
 * Given s = "hello", return "olleh".
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  const strs = s.split('');
  let index = 0;
  const mid = (s.length - 1) / 2;
  while (index <= mid) {
    const tmp = strs[index];
    const i = 2 * mid - index;
    strs[index] = strs[i];
    strs[i] = tmp;
    index += 1;
  }
  return strs.join('');
};
