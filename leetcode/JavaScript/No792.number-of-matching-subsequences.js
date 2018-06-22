/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given string S and a dictionary of words words,
 * find the number of words[i] that is a subsequence of S.
 *
 * Example:
 * Example:
 * Input:
 * S = "abcde"
 * words = ["a", "bb", "acd", "ace"]
 * Output: 3
 * Explanation: There are three words in words that are a subsequence of S: "a", "acd", "ace".
 *
 * Note:
 * - All words in words and S will only consists of lowercase letters.
 * - The length of S will be in the range of [1, 50000].
 * - The length of words will be in the range of [1, 5000].
 * - The length of words[i] will be in the range of [1, 50].
 */

/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(S, words) {
  const tmp = {};

  const isSubseq = (word) => {
    if (tmp[word]) return true;
    if (tmp[word] === false) return false;

    let sIndex = 0;
    let wIndex = 0;

    while (sIndex < S.length && wIndex < word.length) {
      const cur = word.slice(0, wIndex + 1);
      if (tmp[cur] && tmp[cur] + 1 > sIndex) {
        wIndex += 1;
        sIndex = tmp[cur] + 1;
        continue;
      }

      if (tmp[cur] === false) {
        tmp[word] = false;
        return false;
      }

      sIndex = S.indexOf(word[wIndex], sIndex);
      if (sIndex === -1) {
        tmp[cur] = false;
        tmp[word] = false;
        return false;
      }

      tmp[cur] = sIndex;
      sIndex += 1;
      wIndex += 1;
    }

    if (sIndex >= S.length && wIndex < word.length) {
      tmp[word] = false;
      return false;
    }

    tmp[word] = sIndex - 1;
    return true;
  };

  let result = 0;
  for (const word of words) {
    if (isSubseq(word)) result += 1;
  }
  return result;
};