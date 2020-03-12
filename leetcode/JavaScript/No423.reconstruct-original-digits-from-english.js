/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a non-empty string containing an out-of-order English representation of digits 0-9, output the digits in ascending order.
 *
 * Note:
 * Input contains only lowercase English letters.
 * Input is guaranteed to be valid and can be transformed to its original digits. That means invalid inputs such as "abc" or "zerone" are not permitted.
 * Input length is less than 50,000.
 *
 * Example 1:
 * Input: "owoztneoer"
 * Output: "012"
 *
 * Example 2:
 * Input: "fviefuro"
 * Output: "45"
 *
 * 给定一个非空字符串，其中包含字母顺序打乱的英文单词表示的数字0-9。按升序输出原始的数字。
 *
 * 注意:
 * 输入只包含小写英文字母。
 * 输入保证合法并可以转换为原始的数字，这意味着像 "abc" 或 "zerone" 的输入是不允许的。
 * 输入字符串的长度小于 50,000
 */


// 找特性：哪些字母是某个英文数字中独占的？
const NUMS = [
  'zero', // z
  'one',
  'two', // w
  'three',
  'four', // u
  'five',
  'six', // x
  'seven',
  'eight', // g
  'nine'
]

/**
* @param {string} s
* @return {string}
*/
var originalDigits = function(s) {
  const dict = {}
  for (const char of s) {
    dict[char] = (dict[char] || 0) + 1
  }

  const list = []
  list[0] = dict['z'] || 0
  list[2] = dict['w'] || 0
  list[4] = dict['u'] || 0
  list[6] = dict['x'] || 0
  list[8] = dict['g'] || 0

  list[1] = (dict['o'] || 0) - list[0] - list[2] - list[4]
  list[3] = (dict['t'] || 0) - list[2] - list[8]
  list[5] = (dict['f'] || 0) - list[4]
  list[7] = (dict['v'] || 0) - list[5]
  list[9] = (dict['i'] || 0) - list[5] - list[6] - list[8]

  return list.reduce((arr, val, i) => {
    if (val <= 0) return arr
    arr.push(
      Array.from({ length: val }, (_, j) => i).join('')
    )
    return arr
  }, []).join('')
}

