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
 * n = 2 时，输出上次字符串中的数值个数，因为上次字符串有 1 个 1，所以输出 11
 * n = 3 时，由于上次字符是 11，有 2 个 1，所以输出 21
 * n = 4 时，由于上次字符串是 21，有 1 个 2 和 1 个 1，所以输出 1211
 * 依次类推
 * 原题目描述非常不清晰，投反对票的人数是支持人数的数倍（摊手）
 */

/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = (n) => {
  let str = '1';

  for (let i = 2; i <= n; i += 1) {
    tmp = [];
    let j = 0;
    while (j < str.length) {
      let count = 1;
      const char = str[j];
      while (str[j] == str[j + 1]) {
        j += 1;
        count += 1;
      }
      j += 1;
      tmp.push(`${count}${char}`);
    }
    str = tmp.join('');
  }
  return str;
};
