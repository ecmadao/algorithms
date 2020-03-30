/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given two integers n and k, you need to construct a list which contains n different positive integers ranging from 1 to n and obeys the following requirement:
 * Suppose this list is [a1, a2, a3, ... , an], then the list [|a1 - a2|, |a2 - a3|, |a3 - a4|, ... , |an-1 - an|] has exactly k distinct integers.
 * If there are multiple answers, print any of them.
 *
 * Example 1:
 * Input: n = 3, k = 1
 * Output: [1, 2, 3]
 * Explanation: The [1, 2, 3] has three different positive integers ranging from 1 to 3, and the [1, 1] has exactly 1 distinct integer: 1.
 *
 * Example 2:
 * Input: n = 3, k = 2
 * Output: [1, 3, 2]
 * Explanation: The [1, 3, 2] has three different positive integers ranging from 1 to 3, and the [2, 1] has exactly 2 distinct integers: 1 and 2.
 *
 * Note:
 * The n and k are in the range 1 <= k < n <= 10^4.
 *
 * 给定两个整数 n 和 k，你需要实现一个数组，这个数组包含从 1 到 n 的 n 个不同整数，同时满足以下条件：
 * 1. 如果这个数组是 [a1, a2, a3, ... , an] ，那么数组 [|a1 - a2|, |a2 - a3|, |a3 - a4|, ... , |an-1 - an|] 中应该有且仅有 k 个不同整数；.
 * 2. 如果存在多种答案，你只需实现并返回其中任意一种.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {
  const res = [1]

  while (k) {
    const index = res.length
    if (index % 2 === 1) {
      res.push(res[index - 1] + k)
    } else {
      res.push(res[index - 1] - k)
    }
    k -= 1
  }

  if (res.length < n) {
    for (let i = res.length + 1; i <= n; i += 1) res.push(i)
  }
  return res
}
