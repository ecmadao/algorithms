/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 给定一个布尔表达式和一个期望的布尔结果 result，布尔表达式由 0 (false)、1 (true)、& (AND)、 | (OR) 和 ^ (XOR) 符号组成。实现一个函数，算出有几种可使该表达式得出 result 值的括号方法。
 *
 * 示例 1:
 * 输入: s = "1^0|0|1", result = 0
 * 输出: 2
 * 解释: 两种可能的括号方法是
 * 1^(0|(0|1))
 * 1^((0|0)|1)
 *
 * 示例 2:
 * 输入: s = "0&0&0&1^1|0", result = 1
 * 输出: 10
 *
 * 提示：
 * 运算符的数量不超过 19 个
 */

const cal = (n1, n2, op) => {
  switch (op) {
    case '^':
      return n1 ^ n2
    case '|':
      return n1 | n2
    case '&':
      return n1 & n2
  }
}

/**
* @param {string} s
* @param {number} result
* @return {number}
*/
var countEval = function(s, result) {
  const cache = {}

  const dfs = (start, end, target) => {
    if (start >= end) {
      return s[start] === `${target}` ? 1 : 0
    }
    const key = `${start}-${end}-${target}`
    if (cache[key] !== undefined) return cache[key]

    let count = 0
    for (let i = start; i < end; i += 2) {
      const op = s[i + 1]
      for (let j = 0; j <= 1; j += 1) {
        for (let k = 0; k <= 1; k += 1) {
          if (cal(j, k, op) !== target) continue
          count += (
            dfs(start, i, j) * dfs(i + 2, end, k)
          )
        }
      }
    }
    cache[key] = count
    return count
  }

  return dfs(0, s.length - 1, result)
}
