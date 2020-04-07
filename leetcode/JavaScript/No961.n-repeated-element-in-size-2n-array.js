/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.
 * Return the element repeated N times.
 *
 * Example 1:
 * Input: [1,2,3,3]
 * Output: 3
 *
 * Example 2:
 * Input: [2,1,2,5,3,2]
 * Output: 2
 *
 * Example 3:
 * Input: [5,1,5,2,5,3,5,4]
 * Output: 5
 *
 * Note:
 * 1. 4 <= A.length <= 10000
 * 2. 0 <= A[i] < 10000
 * 3. A.length is even
 *
 * 在大小为 2N 的数组 A 中有 N+1 个不同的元素，其中有一个元素重复了 N 次。
 * 返回重复了 N 次的那个元素。
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  for (let i = 0; i < A.length; i += 1) {
    if (A[i] === A[i + 1]) return A[i]
  }
  return A[1] === A[3] ? A[1] : A[0]
};