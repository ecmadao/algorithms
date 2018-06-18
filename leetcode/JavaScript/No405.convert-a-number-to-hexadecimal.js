/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an integer, write an algorithm to convert it to hexadecimal.
 * For negative integer, two’s complement method is used.
 *
 * Note:
 * - All letters in hexadecimal (a-f) must be in lowercase.
 * - The hexadecimal string must not contain extra leading 0s. If the number is zero, it is represented by a single zero character '0'; otherwise, the first character in the hexadecimal string will not be the zero character.
 * - The given number is guaranteed to fit within the range of a 32-bit signed integer.
 * - You must not use any method provided by the library which converts/formats the number to hex directly.
 *
 * Example:
 * Input:
 * 26
 * Output:
 * "1a"
 *
 * Input:
 * -1
 * Output:
 * "ffffffff"
 *
 * 将十进制数转换为十六进制。注意正负数。结果全部小写。不要用编程语言自带的转换函数
 */

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  if (!num) return `${num}`;
  const MAP = {
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f'
  };
  const negative = num < 0;
  num = Math.abs(num);

  let result = '';
  let count = 0;
  let carry = negative ? 1 : 0;

  while ((num && !negative) || (negative && count < 8)) {
    let reminder = num % 16;
    reminder = negative ? 15 - reminder + carry : reminder;
    if (reminder >= 16) {
      reminder = reminder % 16;
      carry = 1;
    } else {
      carry = 0;
    }
    result = `${MAP[reminder] || reminder}${result}`;
    num = Math.floor(num / 16);
    count += 1;
  }
  return result;
};

// Test case
toHex(31148);
toHex(1);
toHex(-1);
toHex(-100);
toHex(100);
toHex(5);
