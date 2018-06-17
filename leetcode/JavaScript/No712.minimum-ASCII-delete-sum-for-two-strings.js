/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given two strings s1, s2, find the lowest ASCII sum of deleted characters to make two strings equal.
 *
 * Example:
 * Input: s1 = "sea", s2 = "eat"
 * Output: 231
 * Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
 * Deleting "t" from "eat" adds 116 to the sum.
 * At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.
 *
 * Input: s1 = "delete", s2 = "leet"
 * Output: 403
 * Explanation: Deleting "dee" from "delete" to turn the string into "let",
 * adds 100[d]+101[e]+101[e] to the sum.  Deleting "e" from "leet" adds 101[e] to the sum.
 * At the end, both strings are equal to "let", and the answer is 100+101+101+101 = 403.
 * If instead we turned both strings into "lee" or "eet", we would get answers of 433 or 417, which are higher.
 *
 * Note:
 * - 0 < s1.length, s2.length <= 1000.
 * - All elements of each string will have an ASCII value in [97, 122].
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
  const len1 = s1.length;
  const len2 = s2.length;
  const dpTmp = [];

  let codeA = 0;
  for (let i1 = 0; i1 < len1; i1 += 1) {
    dpTmp[i1] = [];
    const code1 = s1.charCodeAt(i1);

    let codeB = 0;
    for (let i2 = 0; i2 < len2; i2 += 1) {
      const code2 = s2.charCodeAt(i2);

      if (i1 === 0 && i2 === 0) {
        dpTmp[i1][i2] = code1 === code2 ? 0 : code1 + code2;
        codeB += code2;
      } else if (i1 === 0) {
        dpTmp[i1][i2] = code1 === code2 ? codeB : dpTmp[i1][i2 - 1] + code2;
        codeB += code2;
      } else if (i2 === 0) {
        dpTmp[i1][i2] = code1 === code2 ? codeA : dpTmp[i1 - 1][i2] + code1;
      } else {
        dpTmp[i1][i2] = code1 === code2
          ? dpTmp[i1 - 1][i2 - 1]
          : Math.min(
              dpTmp[i1][i2 - 1] + code2,
              dpTmp[i1 - 1][i2] + code1
            );
      }
    }
    codeA += code1;
  }

  return dpTmp[s1.length - 1][s2.length - 1];
};

// Test case
console.log(minimumDeleteSum('delete', 'leet'));
console.log(minimumDeleteSum('sea', 'eat'));
console.log(minimumDeleteSum('abcba', 'cba'));
console.log(minimumDeleteSum('djoqzmzxe', 'onydroiizrlggfh')); // 1971
