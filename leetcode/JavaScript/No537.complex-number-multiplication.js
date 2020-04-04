/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given two strings representing two complex numbers.
 * You need to return a string representing their multiplication.
 * Note i2 = -1 according to the definition.
 *
 * Example 1:
 * Input: "1+1i", "1+1i"
 * Output: "0+2i"
 * Explanation: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need convert it to the form of 0+2i.
 *
 * Example 2:
 * Input: "1+-1i", "1+-1i"
 * Output: "0+-2i"
 * Explanation: (1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i, and you need convert it to the form of 0+-2i.
 *
 * Note:
 * 1. The input strings will not have extra blank.
 * 2. The input strings will be given in the form of a+bi, where the integer a and b will both belong to the range of [-100, 100]. And the output should be also in this form.
 *
 * 给定两个表示复数的字符串。
 * 返回表示它们乘积的字符串。注意，根据定义 i2 = -1 。
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
  const format = (str) => {
    const [s1, s2] = str.split('+')
    return [
      Number(s1),
      Number(s2.slice(0, -1))
    ]
  }

  const [a1, a2] = format(a)
  const [b1, b2] = format(b)

  const num = a1 * b1 - a2 * b2
  const i = a1 * b2 + a2 * b1

  return `${num}+${i}i`
}

