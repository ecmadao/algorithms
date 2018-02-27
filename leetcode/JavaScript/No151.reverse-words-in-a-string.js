/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an input string, reverse the string word by word.
 * For example,
 * Given s = "the sky is blue",
 * return "blue is sky the".
 *
 * Clarification:
 * 1. What constitutes a word?
 * A sequence of non-space characters constitutes a word.
 * 2. Could the input string contain leading or trailing spaces?
 * Yes. However, your reversed string should not contain leading or trailing spaces.
 * 3. How about multiple spaces between two words?
 * Reduce them to a single space in the reversed string.
 */

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
  const queue = [];
  const sections = str.trim().split(' ');
  for (let i = 0; i < sections.length; i += 1) {
    if (sections[i]) queue.unshift(sections[i]);
  }
  return queue.join(' ');
};
