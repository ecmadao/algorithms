/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a string s, find the longest palindromic subsequence's length in s.
 * You may assume that the maximum length of s is 1000.
 *
 * Example:
 * Input:
 * "bbbab"
 * Output:
 * 4
 * One possible longest palindromic subsequence is "bbbb".
 *
 * Input:
 * "cbbd"
 * Output:
 * 2
 * One possible longest palindromic subsequence is "bb".
 *
 * 给定一个字符串s，找到其中最长的回文子序列。可以假设s的最大长度为1000
 */

/**
 * @param {string} s
 * @return {number}
 *
 * Solution 1 - Memory Limit Exceeded
 * 超时
 */
var longestPalindromeSubseq_1 = function(s) {
  const tmp = {};
  const getNextEndIndex = (start, end) => {
    let i = end;
    while (s[start] !== s[i] && i > start) i -= 1;
    return i;
  };

  const palindromeLength = (start, end, pre) => {
    if (end <= start) return pre;
    const key = `${start}-${end}-${pre}`;
    if (tmp[key]) return tmp[key];

    let result = pre;
    const nextEnd = getNextEndIndex(start, end);
    if (nextEnd > start) {
      result = palindromeLength(start + 1, nextEnd - 1, pre + 2);
    }
    const len = Math.max(
      result,
      palindromeLength(start + 1, end, pre)
    );
    tmp[key] = len;
    return len;
  };

  return Math.max(
    1,
    palindromeLength(0, s.length - 1, 0)
  );
};

/**
 * @param {string} s
 * @return {number}
 *
 * =================================================================== Solution 2 ===================================================================
 * 动态规划
 */
var longestPalindromeSubseq_2 = function(s) {
  if (s.length <= 1) return s.length
  const dp = []
  let result = 1

  for (let i = 0; i < s.length; i += 1) {
    if (!dp[i]) dp[i] = []
    dp[i][i] = 1

    let j = i - 1
    while (j >= 0) {
      let len = 0
      if (s[j] === s[i]) {
        len = (dp[j + 1] && dp[j + 1][i - 1] ? dp[j + 1][i - 1] : 0) + 2
      }
      dp[j][i] = Math.max(
        len,
        dp[j + 1][i],
        dp[j][i - 1]
      )

      result = Math.max(result, dp[j][i])
      j -= 1
    }
  }
  return result
}


// Test case
console.log(longestPalindromeSubseq ('bbbab'));
console.log(longestPalindromeSubseq ('cbbb'));
console.log(longestPalindromeSubseq ('cbbcb'));
console.log(longestPalindromeSubseq ('euazbipzncptldueeuechubrcourfpftcebikrxhybkymimgvldiwqvkszfycvqyvtiwfckexmowcxztkfyzqovbtmzpxojfofbvwnncajvrvdbvjhcrameamcfmcoxryjukhpljwszknhiypvyskmsujkuggpztltpgoczafmfelahqwjbhxtjmebnymdyxoeodqmvkxittxjnlltmoobsgzdfhismogqfpfhvqnxeuosjqqalvwhsidgiavcatjjgeztrjuoixxxoznklcxolgpuktirmduxdywwlbikaqkqajzbsjvdgjcnbtfksqhquiwnwflkldgdrqrnwmshdpykicozfowmumzeuznolmgjlltypyufpzjpuvucmesnnrwppheizkapovoloneaxpfinaontwtdqsdvzmqlgkdxlbeguackbdkftzbnynmcejtwudocemcfnuzbttcoew')); // 159
