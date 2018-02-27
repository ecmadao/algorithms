/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given two non-negative integers num1 and num2 represented as strings,
 * return the product of num1 and num2.
 *
 * Note:
 * 1. The length of both num1 and num2 is < 110.
 * 2. Both num1 and num2 contains only digits 0-9.
 * 3. Both num1 and num2 does not contain any leading zero.
 * 4. You must not use any built-in BigInteger library or convert the inputs to integer directly.
 *
 * 两个 String 类型的数相乘，例如 '123' * '456'，求其返回的 String
 * 注意，不能直接转换为数字，且输入的 String 合法，不会以 '0' 开头
 */

/**
 * 思路：
 * 简单的乘法：一个数字依次乘以另一个数字的每一位，最后相加
 * 但要注意：
 * 1. 注意进位
 * 2. 前进的位数以 0 补齐
 * 3. 用数组形式表示会更简单
 *
 * 例如，'456' * '123', 456 乘以 123 的每一位用数组表示为
 * [8, 6, 3, 1]
 * [0, 2, 1, 9]
 * [0, 0, 6, 5, 4]
 * 以倒序形式插入，且进位时用 0 填充
 */
const NUMBER_MAP = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

var stringMultiplySingleNum = function(string, num, offset) {
  var forward = 0;
  var result = new Array(offset).fill(0);
  for (var i = string.length - 1; i >= 0; i -= 1) {
    var n = NUMBER_MAP[string[i]];
    var multiplyResult = n * num + forward;
    forward = Math.floor(multiplyResult / 10);
    var current = multiplyResult % 10;
    result[result.length] = current;
  }
  if (forward > 0) {
    result[result.length] = forward;
  }
  return result;
}

/**
* @param {string} num1
* @param {string} num2
* @return {string}
*/
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  var multiplyResult = [];
  var results = [];
  var maxLength = 0;
  for (var i = num1.length - 1; i >= 0; i -= 1) {
    var n1 = NUMBER_MAP[num1[i]];
    var offset = num1.length - 1 - i;
    var result = stringMultiplySingleNum(num2, n1, offset);
    if (result.length > maxLength) {
      maxLength = result.length;
    }
    results.push(result);
  }
  var index = 0;
  var forward = 0;
  while(index < maxLength) {
    var currentSum = results.reduce((pre, next) => {
      var n = next[index] || 0;
      return pre + n;
    }, 0) + forward;
    forward = Math.floor(currentSum / 10);
    var current = currentSum % 10;
    multiplyResult.unshift(current);
    index += 1;
  }
  if (forward) {
    multiplyResult.unshift(forward);
  }
  return multiplyResult.join('');
};