/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a string S, find the number of different non-empty palindromic subsequences in S, and return that number modulo 10^9 + 7.
 * A subsequence of a string S is obtained by deleting 0 or more characters from S.
 * A sequence is palindromic if it is equal to the sequence reversed.
 * Two sequences A_1, A_2, ... and B_1, B_2, ... are different if there is some i for which A_i != B_i.
 *
 * Example:
 * Input:
 * S = 'bccb'
 * Output: 6
 * Explanation:
 * The 6 different non-empty palindromic subsequences are 'b', 'c', 'bb', 'cc', 'bcb', 'bccb'.
 * Note that 'bcb' is counted only once, even though it occurs twice.
 *
 * Input:
 * S = 'abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba'
 * Output: 104860361
 * Explanation:
 * There are 3104860382 different non-empty palindromic subsequences, which is 104860361 modulo 10^9 + 7.
 *
 * Note:
 * - The length of S will be in the range [1, 1000].
 * - Each character S[i] will be in the set {'a', 'b', 'c', 'd'}.
 */

/**
 * @param {string} S
 * @return {number}
 */
const countPalindromicSubsequences = (s) => {
  const cache = {};

  const DFS = (start, end) => {
    const key = `${start}-${end}`;
    if (cache[key]) return cache[key];

    let count = 0;
    for (const char of 'abcd') {
      let left = s.indexOf(char, start);
      let right = end;
      while (s[right] !== char && right >= 0) right -= 1;
      if (right >= left && left !== -1) {
        count += left === right ? 1 : DFS(left + 1, right - 1) + 2;
      }
    }
    cache[key] = count % 1000000007;
    return cache[key];
  };

  return DFS(0, s.length - 1);
};

// Test case
countPalindromicSubsequences('cb'); // 2
countPalindromicSubsequences('ccb'); // 3
countPalindromicSubsequences('cacb'); // 5
countPalindromicSubsequences('bccb'); // 6
countPalindromicSubsequences('abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba'); // 104860361
countPalindromicSubsequences("baaddaaabaddccbbbdcbcccbdbdabdabdbadabddbbcbbcabbccdaccdbcbbcdcdbaadbcadacabcaaaadbcaddbbacddcdabaadcacacdcabaadacadcccdcbbcdabdcdacaacdcdbdacbdbcdcbaddaccabaaaabcadacdaddbcccbcdbadbdddaaabbdbdbcbcdab"); // 431300010

