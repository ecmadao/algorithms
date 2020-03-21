/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array A of positive lengths, return the largest perimeter of a triangle with non-zero area, formed from 3 of these lengths.
 * If it is impossible to form any triangle of non-zero area, return 0.
 *
 * Example 1:
 * Input: [2,1,2]
 * Output: 5
 *
 * Example 2:
 * Input: [1,2,1]
 * Output: 0
 *
 * Example 3:
 * Input: [3,2,3,4]
 * Output: 10
 *
 * Example 4:
 * Input: [3,6,2,3]
 * Output: 8
 *
 * Note:
 * 1. 3 <= A.length <= 10000
 * 2. 1 <= A[i] <= 10^6
 *
 * 给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。
 * 如果不能形成任何面积不为零的三角形，返回 0。
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  A.sort((n1, n2) => n1 - n2)
  while (A.length >= 3) {
    const l1 = A.pop()
    const l2 = A[A.length - 1]
    const l3 = A[A.length - 2]

    if (l3 + l2 > l1) return l1 + l2 + l3
  }

  return 0
}

// [3,6,2,3]
// [2,3,3,6]