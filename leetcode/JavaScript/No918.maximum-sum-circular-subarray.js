/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a circular array C of integers represented by A, find the maximum possible sum of a non-empty subarray of C.
 * Here, a circular array means the end of the array connects to the beginning of the array.  (Formally, C[i] = A[i] when 0 <= i < A.length, and C[i+A.length] = C[i] when i >= 0.)
 * Also, a subarray may only include each element of the fixed buffer A at most once.  (Formally, for a subarray C[i], C[i+1], ..., C[j], there does not exist i <= k1, k2 <= j with k1 % A.length = k2 % A.length.)
 *
 * Example 1:
 * Input: [1,-2,3,-2]
 * Output: 3
 * Explanation: Subarray [3] has maximum sum 3
 *
 * Example 2:
 * Input: [5,-3,5]
 * Output: 10
 * Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10
 *
 * Example 3:
 * Input: [3,-1,2,-1]
 * Output: 4
 * Explanation: Subarray [2,-1,3] has maximum sum 2 + (-1) + 3 = 4
 *
 * Example 4:
 * Input: [3,-2,2,-3]
 * Output: 3
 * Explanation: Subarray [3] and [3,-2,2] both have maximum sum 3
 *
 * Example 5:
 * Input: [-2,-3,-1]
 * Output: -1
 * Explanation: Subarray [-1] has maximum sum -1
 *
 * Note:
 * 1. -30000 <= A[i] <= 30000
 * 2. 1 <= A.length <= 30000
 *
 * 给定一个由整数数组 A 表示的环形数组 C，求 C 的非空子数组的最大可能和。
 * 在此处，环形数组意味着数组的末端将会与开头相连呈环状。（形式上，当0 <= i < A.length 时 C[i] = A[i]，而当 i >= 0 时 C[i+A.length] = C[i]）
 * 此外，子数组最多只能包含固定缓冲区 A 中的每个元素一次。（形式上，对于子数组 C[i], C[i+1], ..., C[j]，不存在 i <= k1, k2 <= j 其中 k1 % A.length = k2 % A.length）
 */


const kadane = (nums) => {
  let res = -Infinity
  let cur = -Infinity

  for (const num of nums) {
    cur = Math.max(cur, 0) + num
    res = Math.max(res, cur)
  }
  return res
}

/**
 * @param {number[]} A
 * @return {number}
 *
 * https://coordinate.wang/index.php/archives/2161/
 * https://leetcode.com/articles/maximum-sub-circular-subarray/
*/
var maxSubarraySumCircular = function(A) {
  const max = Math.max(...A)
  if (max < 0) return max

  const res1 = kadane(A)

  const nums = []
  let sum = 0
  for (const num of A) {
    nums.push(-num)
    sum += num
  }
  const res2 = sum + kadane(nums)
  return Math.max(res1, res2)
}
