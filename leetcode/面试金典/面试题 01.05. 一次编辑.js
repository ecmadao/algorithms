/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 字符串有三种编辑操作:插入一个字符、删除一个字符或者替换一个字符。
 * 给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。
 *
 * 示例 1:
 * 输入:
 * first = "pale"
 * second = "ple"
 * 输出: True
 *
 * 示例 2:
 * 输入:
 * first = "pales"
 * second = "pal"
 * 输出: False
 */

/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function(first, second) {
  const dp = Array.from(
    { length: first.length + 1 }, (_, i) =>
      Array.from({ length: second.length + 1 }, (_, j) => {
        if (j === 0) return i
        if (i === 0) return j
        return Infinity
      })
  )
  for (let i = 1; i <= first.length; i += 1) {
    for (let j = 1; j <= second.length; j += 1) {
      if (first[i - 1] !== second[j - 1]) {
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + 1
        )
      } else {
        dp[i][j] = dp[i - 1][j - 1]
      }
    }
  }

  return dp[first.length][second.length] <= 1
}
