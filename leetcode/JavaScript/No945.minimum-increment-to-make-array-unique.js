/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array of integers A, a move consists of choosing any A[i], and incrementing it by 1.
 * Return the least number of moves to make every value in A unique.
 *
 * Example 1:
 * Input: [1,2,2]
 * Output: 1
 * Explanation:  After 1 move, the array could be [1, 2, 3].
 *
 * Example 2:
 * Input: [3,2,1,2,1,7]
 * Output: 6
 * Explanation:  After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
 * It can be shown with 5 or less moves that it is impossible for the array to have all unique values.
 *
 * Note:
 * 1. 0 <= A.length <= 40000
 * 2. 0 <= A[i] < 40000
 *
 * 给定整数数组 A，每次 move 操作将会选择任意 A[i]，并将其递增 1。
 * 返回使 A 中的每个值都是唯一的最少操作次数。
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
  A.sort((n1, n2) => n1 - n2)

  let res = 0
  let i = 0
  let k = 0
  while (i < A.length) {
    while (i + 1 < A.length && A[i + 1] === A[i]) i += 1

    if (i === k) {
      k += 1
      i += 1
      continue
    }

    let j = i
    while (j > k) {
      A[j] += 1
      res += 1
      j -= 1
    }
    k = j + 1
  }

  return res
}

// [3,2,1,2,1,7]
// [1,1,2,2,3,7]
// [1,2,2,2,3,7]
// [1,2,3,3,3,7]
// [1,2,3,4,4,7]
// [1,2,3,4,5,7]

/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique_2 = function(A) {
  A.sort((n1, n2) => n1 - n2)

  let num = A[0] + 1
  let res = 0
  for (let i = 1; i < A.length; i += 1) {
    if (A[i] < num) {
      res += (num - A[i])
      num += 1
    } else {
      num = A[i] + 1
    }
  }
  return res
}
