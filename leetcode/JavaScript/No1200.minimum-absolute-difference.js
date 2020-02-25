/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.
 * Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows
 * a, b are from arr
 * a < b
 * b - a equals to the minimum absolute difference of any two elements in arr
 *
 * Example 1:
 * Input: arr = [4,2,1,3]
 * Output: [[1,2],[2,3],[3,4]]
 * Explanation:
 * The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
 *
 * Example 2:
 * Input: arr = [1,3,6,10,15]
 * Output: [[1,3]]
 *
 * Example 3:
 * Input: arr = [3,8,-10,23,19,-4,-14,27]
 * Output: [[-14,-10],[19,23],[23,27]]
 *
 * Constraints:
 * 1. 2 <= arr.length <= 10^5
 * 2. -10^6 <= arr[i] <= 10^6
 *
 * 给你个整数数组 arr，其中每个元素都 不相同。
 * 请你找到所有具有最小绝对差的元素对，并且按升序的顺序返回
 */

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  arr.sort((n1, n2) => n1 - n2)

  let result = []
  for (let i = 1; i < arr.length; i += 1) {
    const diff = arr[i] - arr[i - 1]
    if (!result.length || result[0][1] - result[0][0] === diff) {
      result.push([arr[i - 1], arr[i]])
    } else if (result[0][1] - result[0][0] > diff) {
      result = [[arr[i - 1], arr[i]]]
    }
  }
  return result
}
