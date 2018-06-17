/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.
 * You have the following 3 operations permitted on a word:
 * 1. Insert a character
 * 2. Delete a character
 * 3. Replace a character
 *
 * Example:
 * Input: word1 = "horse", word2 = "ros"
 * Output:
 * Explanation:
 * horse -> rorse (replace 'h' with 'r')
 * rorse -> rose (remove 'r')
 * rose -> ros (remove 'e')
 *
 * Input: word1 = "intention", word2 = "execution"
 * Output: 5
 * Explanation:
 * intention -> inention (remove 't')
 * inention -> enention (replace 'i' with 'e')
 * enention -> exention (replace 'n' with 'x')
 * exention -> exection (replace 'n' with 'c')
 * exection -> execution (insert 'u')
 *
 * Wiki:
 * 编辑距离：https://zh.wikipedia.org/wiki/%E7%B7%A8%E8%BC%AF%E8%B7%9D%E9%9B%A2
 * 莱文斯坦距离：https://zh.wikipedia.org/wiki/%E8%90%8A%E6%96%87%E6%96%AF%E5%9D%A6%E8%B7%9D%E9%9B%A2
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const tmp = [];
  if (!word1.length || !word2.length) return Math.max(word1.length, word2.length);

  for (let i = 0; i < word1.length; i += 1) {
    tmp[i] = [];
    const letter1 = word1[i];

    for (let j = 0; j < word2.length; j += 1) {
      const letter2 = word2[j];
      if (i === 0 && j === 0) {
        tmp[i][j] = letter1 === letter2 ? 0 : 1;
      } else if (i === 0) {
        tmp[i][j] = letter1 === letter2 ? j : tmp[i][j - 1] + 1;
      } else if (j === 0) {
        tmp[i][j] = letter1 === letter2 ? i : tmp[i - 1][j] + 1;
      } else {
        tmp[i][j] = Math.min(
          tmp[i][j - 1] + 1,
          tmp[i - 1][j] + 1,
          tmp[i - 1][j - 1] + (letter1 === letter2 ? 0 : 1)
        );
      }
    }
  }

  return tmp[word1.length - 1][word2.length - 1];
};
