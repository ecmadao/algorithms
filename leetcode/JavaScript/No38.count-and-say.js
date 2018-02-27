/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * The count-and-say sequence is the sequence of integers with the first five terms as following:
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 *
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * Given an integer n, generate the nth term of the count-and-say sequence.
 *
 * Example:
 * Input: 1
 * Output: "1"
 *
 * Input: 4
 * Output: "1211"
 *
 * Note:
 * Each term of the sequence of integers will be represented as a string.
 *
 * n = 1 时,输出字符串 1
 * n = 2时，输出上次字符串中的数值个数，因为上次字符串有 1 个 1，所以输出 11
 * n = 3 时，由于上次字符是 11，有 2 个 1，所以输出 21
 * n = 4 时，由于上次字符串是 21，有 1 个 2 和 1 个 1，所以输出 1211
 * 依次类推（蛇精病一样的题目，投反对票的人数是支持人数的 8 倍！）
 */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  var str = '';
  for (var i = 1; i <= n; i += 1) {
    if (!str) {
      str = '1';
      continue;
    } else {
      var string = '';
      var count = 0;
      var result = '';
      for (var j = 0; j < str.length; j += 1) {
        if (string !== str[j]) {
          if (count > 0) {
            result += `${count}${string}`;
          }
          string = str[j];
          count = 1;
        } else {
          count += 1;
        }
      }
      result += `${count}${string}`;
      str = result;
    }
  }
  return str;
};