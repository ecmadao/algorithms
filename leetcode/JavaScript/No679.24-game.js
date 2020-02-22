/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * You have 4 cards each containing a number from 1 to 9.
 * You need to judge whether they could operated through *, /, +, -, (, ) to get the value of 24.
 *
 * Example 1:
 * Input: [4, 1, 8, 7]
 * Output: True
 * Explanation: (8-4) * (7-1) = 24
 *
 * Example 2:
 * Input: [1, 2, 1, 2]
 * Output: False
 *
 * Note:
 * The division operator / represents real division, not integer division. For example, 4 / (1 - 2/3) = 12.
 * Every operation done is between two numbers. In particular, we cannot use - as a unary operator.
 * For example, with [1, 1, 1, 1] as input, the expression -1 - 1 - 1 - 1 is not allowed.
 * You cannot concatenate numbers together. For example, if the input is [1, 2, 1, 2], we cannot write this as 12 + 12
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * DFS
 * 每次从队列中取两个数组合，然后放回队列继续计算
 */
var judgePoint24 = function(nums) {
  const ops = ['+', '*', '-', '/']
  const dfs = (arr) => {
    if (!arr.length) return false
    if (arr.length === 1) return Math.abs(arr[0] - 24) <= Math.pow(10, -6)

    for (let i = 0; i < arr.length; i += 1) {
      for (let j = 0; j < arr.length; j += 1) {
        if (i === j) continue

        const list = arr.filter((_, index) => index !== i && index !== j)

        for (let opIndex = 0; opIndex < ops.length; opIndex += 1) {
          // 避免重复计算
          if (opIndex <= 1 && i < j) continue

          const op = ops[opIndex]
          let num
          switch (op) {
            case '+':
              num = arr[i] + arr[j]
              break
            case '-':
              num = arr[i] - arr[j]
              break
            case '*':
              num = arr[i] * arr[j]
              break
            case '/':
              num = arr[i] / arr[j]
              break
          }
          list.push(num)
          const check = dfs(list)
          list.pop()
          if (check) return true
        }
      }
    }
    return false
  }
  return dfs(nums)
}
