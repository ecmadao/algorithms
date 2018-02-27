/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a string s consists of upper/lower-case alphabets and empty space characters ' ',
 * return the length of last word in the string.
 * If the last word does not exist, return 0.
 *
 * Note:
 * A word is defined as a character sequence consists of non-space characters only.
 *
 * Example:
 * Given s = "Hello World",
 * return 5.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var arr = s.split(' ');
  for (var i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i]) return arr[i].length;
  }
  return 0;
};