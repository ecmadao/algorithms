/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a word, you need to judge whether the usage of capitals in it is right or not.
 * We define the usage of capitals in a word to be right when one of the following cases holds:
 * All letters in this word are capitals, like "USA".
 * All letters in this word are not capitals, like "leetcode".
 * Only the first letter in this word is capital if it has more than one letter, like "Google".
 * Otherwise, we define that this word doesn't use capitals in a right way.
 *
 * Example:
 * Input: "USA"
 * Output: True
 *
 * Input: "FlaG"
 * Output: False
 *
 * Note:
 * The input will be a non-empty word consisting of uppercase and lowercase latin letters.
 */

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  let upperCount = 0;
  for (let i = 0; i < word.length; i += 1) {
    const char = word[i];
    if (/[A-Z]/.test(char)) {
      upperCount += 1;
    }
  }
  return upperCount === 0 || upperCount === word.length || (upperCount === 1 && /[A-Z]/.test(word[0]))
};
