/**
 * Difficulty:
 * Easy
 * 
 * Desc:
 * Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
 * 
 * Note:
 * - The length of both num1 and num2 is < 5100.
 * - Both num1 and num2 contains only digits 0-9.
 * - Both num1 and num2 does not contain any leading zero.
 * - You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let i1 = num1.length - 1;
  let i2 = num2.length - 1;

  let result = '';
  let pre = 0;
  while (i1 >= 0 || i2 >= 0) {
    const n1 = Number(num1[i1] || 0);
    const n2 = Number(num2[i2] || 0);
    const sum = n1 + n2 + pre;
    result = `${sum % 10}${result}`;
    pre = sum >= 10 ? 1 : 0;
    i1 -= 1;
    i2 -= 1;
  }
  if (pre) {
    result = `${pre}${result}`;
  }
  return result;
};
