/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 *
 * Example1:
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 *
 * Example2:
 * Input: "cbbd"
 * Output: "bb"
 *
 * 寻找字符串中的最长回文字符串
 */

 /**
 * @param {string} s
 * @return {string}
 *
 * 该方法的核心思想是，从左侧开始向右遍历，每个点都当做是回文的中心点，以此向左右扩张，直到边界
 * 当点的右侧的字符串长度 * 2 小于已知回文的长度时，则没有必要继续遍历，直接中断即可
 */
var longestPalindrome_1 = function(s) {
  var length = s.length;
  var longest = '';

  var getPalindrome = function(left, right) {
    while(left >= 0 && right < length) {
      if (s[left] !== s[right]) {
        break;
      }
      left -= 1;
      right += 1;
    }
    return s.slice(left + 1, right);
  };

  for (var i = 0; i < length; i += 1) {
    if (longest.length > (length - i) * 2) break;
    // odd
    var palindrome = getPalindrome(i, i);
    if (palindrome.length > longest.length) longest = palindrome;

    // even
    palindrome = getPalindrome(i, i + 1);
    if (palindrome.length > longest.length) longest = palindrome;
  }

  return longest;
};

/**
 * @param {string} s
 * @return {string}
 * 动态规划法
 */
var longestPalindrome_2 = function(s) {
  if (!s.length) return ''
  let result = s[0]
  const tmp = []

  for (let i = 1; i < s.length; i += 1) {
    if (!tmp[i]) tmp[i] = []
    tmp[i][i] = true

    let j = i - 1
    while (j >= 0 && i + (i - j) - 1 <= s.length - 1) {
      if (!tmp[j]) tmp[j] = []
      tmp[j][j] = true

      const l1 = i + (i - j)
      if (l1 <= s.length - 1) tmp[j][l1] = s[j] === s[l1] && (tmp[j + 1][l1 - 1] === undefined ? true : tmp[j + 1][l1 - 1])

      const l2 = i + (i - j) - 1
      tmp[j][l2] = s[j] === s[l2] && (tmp[j + 1][l2 - 1] === undefined ? true : tmp[j + 1][l2 - 1])

      if (tmp[j][l1] && l1 + 1 - j > result.length) {
          result = s.slice(j, l1 + 1)
      }
      if (tmp[j][l2] && l2 + 1 - j > result.length) {
          result = s.slice(j, l2 + 1)
      }
      j -= 1
    }
  }

  return result
}

/*
 * 除了上面的方法以外，还有一种更加优化的方式，叫做 Manacher 算法
 * 其本质和上式一样，也是从左向右进行遍历
 *
 * 参考文献：
 * https://www.61mon.com/index.php/archives/181/
 * https://segmentfault.com/a/1190000003914228
 * http://articles.leetcode.com/longest-palindromic-substring-part-ii
 * https://www.felix021.com/blog/read.php?2040
 */