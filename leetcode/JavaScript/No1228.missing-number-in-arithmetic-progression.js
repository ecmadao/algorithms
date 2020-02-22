/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * In some array arr, the values were in arithmetic progression: the values arr[i+1] - arr[i] are all equal for every 0 <= i < arr.length - 1.
 * Then, a value from arr was removed that was not the first or last value in the array.
 * Return the removed value.
 *
 * Example 1:
 * Input: arr = [5,7,11,13]
 * Output: 9
 * Explanation: The previous array was [5,7,9,11,13].
 *
 * Example 2:
 * Input: arr = [15,13,12]
 * Output: 14
 * Explanation: The previous array was [15,14,13,12].
 *
 * Constraints:
 * 1. 3 <= arr.length <= 1000
 * 2. 0 <= arr[i] <= 10^5
 *
 * 有一个数组，其中的值符合等差数列的数值规律，也就是说：
 * 在 0 <= i < arr.length - 1 的前提下，arr[i+1] - arr[i] 的值都相等。
 * 我们会从该数组中删除一个 既不是第一个 也 不是最后一个的值，得到一个新的数组  arr。
 * 给你这个缺值的数组 arr，请你帮忙找出被删除的那个数
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var missingNumber_1 = function(arr) {
  let diff1 = null
  let index = null

  for (let i = 1; i < arr.length; i += 1) {
    const diff = arr[i] - arr[i - 1]

    if (diff1 === null) {
      diff1 = diff
      index = i - 1
    } else if (diff1 !== diff) {
      return diff === 2 * diff1 ? arr[i - 1] + diff1 : arr[index] + diff
    }
  }
  return arr.slice(-1)[0] + diff1
}

/**
 * @param {number[]} arr
 * @return {number}
 *
 * 等差数列和 =（首项 + 尾项）* 项数 / 2
 * 项数为 arr.length + 1
 * “数列和”与“当前数组的和” 的差值就是要求的元素
 */
var missingNumber = function(arr) {
  return (arr[0] + arr.slice(-1)[0]) * (arr.length + 1) / 2 - arr.reduce((n1, n2) => n1 + n2, 0)
}
