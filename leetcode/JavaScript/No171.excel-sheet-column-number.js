/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Related to question: Excel Sheet Column Title
 * Given a column title as appear in an Excel sheet, return its corresponding column number.
 *
 * Example:
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27
 * AB -> 28
 *
 * 和 No.168 类似
 * 需要注意的是，从最后一位字母作为第一位，向前算起，每一位字母转换为数字 n 后，实际代表的数字为 n * 上一位代表的数字
 * 第一位的每一个 1 代表 1，第二位的每一个 1 代表 26，依次类推
 */

const letter2Number = letter => letter.charCodeAt(0) - 64;

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let num = 0;
  let pre; // 上一位每一个 1 实际代表的数字

  for (let i = s.length - 1; i >= 0; i -= 1) {
    const status = s.length - i;
    const letter = s[i];
    const number = letter2Number(letter);
    pre = status === 1 ? 1 : 26 * pre;
    num += number * pre;
  }
  return num;
};
