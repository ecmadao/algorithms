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
var longestPalindrome = function(s) {
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

/*
 * 除了上面的方法以外，还有一种更加优化的方式，叫做 Manacher 算法
 * 其本质和上式一样，也是从左向右进行遍历
 */