/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Suppose you have N integers from 1 to N. We define a beautiful arrangement as an array that is constructed by these N numbers successfully if one of the following is true for the ith position (1 <= i <= N) in this array:
 * 1. The number at the ith position is divisible by i.
 * 2. i is divisible by the number at the ith position.
 * Now given N, how many beautiful arrangements can you construct?
 *
 * Example 1:
 * Input: 2
 * Output: 2
 * Explanation:
 * The first beautiful arrangement is [1, 2]:
 * Number at the 1st position (i=1) is 1, and 1 is divisible by i (i=1).
 * Number at the 2nd position (i=2) is 2, and 2 is divisible by i (i=2).
 * The second beautiful arrangement is [2, 1]:
 * Number at the 1st position (i=1) is 2, and 2 is divisible by i (i=1).
 * Number at the 2nd position (i=2) is 1, and i (i=2) is divisible by 1.
 *
 * Note:
 * N is a positive integer and will not exceed 15.
 *
 * 假设有从 1 到 N 的 N 个整数，如果从这 N 个数字中成功构造出一个数组，使得数组的第 i 位 (1 <= i <= N) 满足如下两个条件中的一个，我们就称这个数组为一个优美的排列。条件：
 * 1. 第 i 位的数字能被 i 整除
 * 2. i 能被第 i 位上的数字整除
 * 现在给定一个整数 N，请问可以构造多少个优美的排列？
 */

/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {
  let res = 0

  const dfs = (index, list) => {
    if (index === N) {
      res += 1
      return
    }

    for (let i = 0; i < list.length; i += 1) {
      const num = list[i]
      if (num % (index + 1) === 0 || (index + 1) % num === 0) {
        list.splice(i, 1)
        dfs(index + 1, list)
        list.splice(i, 0, num)
      }
    }
  }

  dfs(0, Array.from({ length: N }, (_, i) => i + 1))
  return res
}
