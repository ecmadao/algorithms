/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given two words word1 and word2, find the minimum number of steps required to make word1 and word2 the same,
 * where in each step you can delete one character in either string.
 *
 * Example:
 * Input: "sea", "eat"
 * Output: 2
 * Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
 *
 * Note:
 * - The length of given words won't exceed 500.
 * - Characters in given words can only be lower-case letters.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 *
 * Solution 1: Memory Limit Exceeded
 */
var minDistance = function(s1, s2) {
  const len1 = s1.length;
  const len2 = s2.length;
  const tmp = {};

  const dp = (i1, i2, sum) => {
    if (i1 >= len1 && i2 >= len2) return sum;
    const key = `${i1}-${i2}-${sum}`;
    if (tmp[key]) return tmp[key];

    let result;
    const code1 = s1[i1];
    const code2 = s2[i2];

    if (i1 < len1 && i2 < len2) {
      result = code1 === code2
        ? dp(i1 + 1, i2 + 1, sum)
        : Math.min(
          dp(i1, i2 + 1, sum + 1),
          dp(i1 + 1, i2, sum + 1)
        );
    } else if (i1 < len1) {
      result = len1 - i1 + sum;
    } else {
      result = len2 - i2 + sum;
    }
    tmp[key] = result;
    return result;
  };

  return dp(0, 0, 0);
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 *
 * Solution 2
 */
var minDistance = function(s1, s2) {
  const len1 = s1.length;
  const len2 = s2.length;

  if (!len1 || !len2) return Math.max(len1, len2);
  const dpTmp = [];

  for (let i1 = 0; i1 < len1; i1 += 1) {
    dpTmp[i1] = [];
    const code1 = s1[i1];

    for (let i2 = 0; i2 < len2; i2 += 1) {
      const code2 = s2[i2];

      if (i1 === 0 && i2 === 0) {
        dpTmp[i1][i2] = code1 === code2 ? 0 : 2;
      } else if (i1 === 0) {
        dpTmp[i1][i2] = code1 === code2 ? i2 : dpTmp[i1][i2 - 1] + 1;
      } else if (i2 === 0) {
        dpTmp[i1][i2] = code1 === code2 ? i1 : dpTmp[i1 - 1][i2] + 1;
      } else {
        dpTmp[i1][i2] = code1 === code2
          ? dpTmp[i1 - 1][i2 - 1]
          : Math.min(
              dpTmp[i1][i2 - 1] + 1,
              dpTmp[i1 - 1][i2] + 1
            );
      }
    }
  }

  return dpTmp[s1.length - 1][s2.length - 1];
};
