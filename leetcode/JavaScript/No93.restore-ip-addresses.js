/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a string containing only digits, restore it by returning all possible valid IP address combinations.
 *
 * Example:
 * Given "25525511135",
 * return ["255.255.11.135", "255.255.111.35"]. (Order does not matter)
 *
 * 给一个字符串，返回所有可能的合法的 IP 地址。和 N-Queens 类似的题目。注意判断 IP 合法性
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const result = []

  const isValidate = (str) => {
    if (str.length > 1 && /^0/.test(str)) return false
    if (str < 0 || str > 255) return false
    return true
  }

  const restore = (index, arr) => {
    if (index >= s.length) return
    if (arr.length === 3) {
      if (isValidate(s.slice(index))) {
        result.push(`${arr.join('.')}.${s.slice(index)}`)
      }
      return
    }

    let i = index + 1
    while (i - index <= 3 && i <= s.length) {
      if (isValidate(s.slice(index, i))) {
        arr.push(s.slice(index, i))
        restore(i, arr)
        arr.pop()
      }
      i += 1
    }
  }

  restore(0, [])
  return result
}
