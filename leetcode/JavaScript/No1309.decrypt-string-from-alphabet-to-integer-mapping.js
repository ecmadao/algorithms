/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:
 * 1. Characters ('a' to 'i') are represented by ('1' to '9') respectively.
 * 2. Characters ('j' to 'z') are represented by ('10#' to '26#') respectively. 
 * Return the string formed after mapping.
 * It's guaranteed that a unique mapping will always exist.
 * 
 * Example 1:
 * Input: s = "10#11#12"
 * Output: "jkab"
 * Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
 * 
 * Example 2:
 * Input: s = "1326#"
 * Output: "acz"
 * 
 * Example 3:
 * Input: s = "25#"
 * Output: "y"
 * 
 * Example 4:
 * Input: s = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
 * Output: "abcdefghijklmnopqrstuvwxyz"
 * 
 * Constraints:
 * 1. 1 <= s.length <= 1000
 * 2. s[i] only contains digits letters ('0'-'9') and '#' letter.
 * 3. s will be valid string such that mapping is always possible.
 * 
 * 给你一个字符串 s，它由数字（'0' - '9'）和 '#' 组成。我们希望按下述规则将 s 映射为一些小写英文字符：
 * 1. 字符（'a' - 'i'）分别用（'1' - '9'）表示。
 * 2. 字符（'j' - 'z'）分别用（'10#' - '26#'）表示。 
 * 返回映射之后形成的新字符串。
 * 题目数据保证映射始终唯一
 */

/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  let i = 0
  const res = []
  const map = Array.from({ length: 26 }).reduce((dict, _, i) => {
    if (i < 9) {
      dict[i + 1] = String.fromCharCode(i + 97)
    } else {
      dict[`${i + 1}#`] = String.fromCharCode(i + 97)
    }
    return dict
  }, {})

  while (i < s.length) {
    if (s[i + 2] === '#') {
      res.push(map[s.slice(i, i + 3)])
      i += 3
    } else {
      res.push(map[s[i]])
      i += 1
    }
  }
  return res.join('')
}
