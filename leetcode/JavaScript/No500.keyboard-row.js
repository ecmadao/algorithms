/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
 *
 * Example:
 * Input: ["Hello", "Alaska", "Dad", "Peace"]
 * Output: ["Alaska", "Dad"]
 *
 * Note:
 * 1. You may use one character in the keyboard more than once.
 * 2. You may assume the input string will only contain letters of alphabet.
 *
 * 给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const keyboardSets = [
      new Set(["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]),
      new Set(["A", "S", "D", "F", "G", "H", "J", "K", "L"]),
      new Set(["Z", "X", "C", "V", "B", "N", "M"])
  ];
  const result = [];

  for (const word of words) {
      const wordSet = new Set(word.toUpperCase().split(''))
      for (const keyboardSet of keyboardSets) {
          let isSubSet = true;
          for (const char of wordSet.values()) {
              if (!keyboardSet.has(char)) {
                  isSubSet = false;
                  break;
              }
          }
          if (isSubSet) {
              result.push(word);
              break;
          }
      }
  }
  return result;
};
