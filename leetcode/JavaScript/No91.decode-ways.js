/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * A message containing letters from A-Z is being encoded to numbers using the following mapping:
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * Given an encoded message containing digits, determine the total number of ways to decode it.
 *
 * Example:
 * Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).
 * The number of ways decoding "12" is 2.
 *
 * 已知我们可以把字母安装上面的表编码成为数字。先给出一个数字（字符串形式），求出不同解码方式的数目
 * 例如，12 可以被解码为 AB 或者 L，即 2 种
 */

/**
 * 思路：
 * 动态规划问题
 * 当处于字符串尾部时，例如位于 123 尾部时，它最后一步可能右 3 解码而来，或者 23 解码
 * 即 decode(s) = decode(s.slice(0, -2)) + decode(s.slice(0, -1))
 * 但是有额外的条件限制，只有当确实可以解码时上式才能成立
 */

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const tmp = {}

  const dfs = (i) => {
    if (tmp[i] !== undefined) return tmp[i]
    if (i >= s.length) {
      return 1
    }

    let count = 0
    let j = i + 1
    while (j <= s.length) {
      const num = Number(s.slice(i, j))
      if (num > 26 || num < 1) break

      const result = dfs(j)
      count += result
      j += 1
    }
    tmp[i] = count
    return count
  }

  return dfs(0)
}
