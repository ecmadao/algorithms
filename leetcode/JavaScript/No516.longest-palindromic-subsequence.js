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
 */

/**
 * @param {string} s
 * @return {number}
 *
 * Solution 1 - Memory Limit Exceeded
 */
var longestPalindromeSubseq_MLE = function(s) {
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
 */
var longestPalindromeSubseq = function(s) {
  const tmpLen = [];
  for (let i = s.length - 1; i >= 0; i -= 1) {
    tmpLen[i] = [];
    tmpLen[i][i] = 1;
    const letter = s[i];

    for (let j = i + 1; j < s.length; j += 1) {
      let len = 0;
      if (letter === s[j]) {
        len = (tmpLen[i + 1] && tmpLen[i + 1][j - 1] ? tmpLen[i + 1][j - 1] : 0) + 2;
      }
      tmpLen[i][j] = Math.max(
        len,
        tmpLen[i + 1][j],
        tmpLen[i][j - 1]
      );
    }
  }
  return tmpLen[0][s.length - 1];
};


// Test case
console.log(longestPalindromeSubseq ('bbbab'));
console.log(longestPalindromeSubseq ('cbbb'));
console.log(longestPalindromeSubseq ('cbbcb'));
console.log(longestPalindromeSubseq ('euazbipzncptldueeuechubrcourfpftcebikrxhybkymimgvldiwqvkszfycvqyvtiwfckexmowcxztkfyzqovbtmzpxojfofbvwnncajvrvdbvjhcrameamcfmcoxryjukhpljwszknhiypvyskmsujkuggpztltpgoczafmfelahqwjbhxtjmebnymdyxoeodqmvkxittxjnlltmoobsgzdfhismogqfpfhvqnxeuosjqqalvwhsidgiavcatjjgeztrjuoixxxoznklcxolgpuktirmduxdywwlbikaqkqajzbsjvdgjcnbtfksqhquiwnwflkldgdrqrnwmshdpykicozfowmumzeuznolmgjlltypyufpzjpuvucmesnnrwppheizkapovoloneaxpfinaontwtdqsdvzmqlgkdxlbeguackbdkftzbnynmcejtwudocemcfnuzbttcoew')); // 159
