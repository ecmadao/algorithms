/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an arbitrary ransom note string and another string containing letters from all the magazines,
 * write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.
 * Each letter in the magazine string can only be used once in your ransom note.
 *
 * Example:
 * canConstruct("a", "b") -> false
 * canConstruct("aa", "ab") -> false
 * canConstruct("aa", "aab") -> true
 *
 * Note:
 * You may assume that both strings contain only lowercase letters.
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let tmp = {};
  for (const letter of magazine) {
    tmp[letter] = (tmp[letter] || 0) + 1;
  }
  for (const letter of ransomNote) {
    if (!tmp[letter]) return false;
    tmp[letter] -= 1;
  }
  return true;
};
