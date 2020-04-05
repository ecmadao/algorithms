/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given two arrays of integers with equal lengths, return the maximum value of:
 * |arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|
 * where the maximum is taken over all 0 <= i, j < arr1.length.
 *
 * Example 1:
 * Input: arr1 = [1,2,3,4], arr2 = [-1,4,5,6]
 * Output: 13
 *
 * Example 2:
 * Input: arr1 = [1,-2,-5,0,10], arr2 = [0,-2,-1,-7,-4]
 * Output: 20
 *
 * Constraints:
 * 1. 2 <= arr1.length == arr2.length <= 40000
 * 2. -10^6 <= arr1[i], arr2[i] <= 10^6
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function(arr1, arr2) {
  let max = -Infinity
  for (let i = 0; i < arr1.length; i += 1) {
    for (let j = i + 1; j < arr1.length; j += 1) {
      max = Math.max(
        max,
        Math.abs(arr1[i] - arr1[j]) + Math.abs(arr2[i] - arr2[j]) + Math.abs(i - j)
      )
    }
  }
  return max
}
