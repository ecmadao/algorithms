/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array of integers arr, replace each element with its rank.
 * The rank represents how large the element is. The rank has the following rules:
 * 1. Rank is an integer starting from 1.
 * 2. The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
 * 3. Rank should be as small as possible.
 *
 * Example 1:
 * Input: arr = [40,10,20,30]
 * Output: [4,1,2,3]
 * Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.
 *
 * Example 2:
 * Input: arr = [100,100,100]
 * Output: [1,1,1]
 * Explanation: Same elements share the same rank.
 *
 * Example 3:
 * Input: arr = [37,12,28,9,100,56,80,5,12]
 * Output: [5,3,4,2,8,6,7,1,3]
 *
 * Constraints:
 * 0 <= arr.length <= 10^5
 * -10^9 <= arr[i] <= 10^9
 *
 * 给你一个整数数组 arr ，请你将数组中的每个元素替换为它们排序后的序号。
 * 序号代表了一个元素有多大。序号编号的规则如下：
 * 1. 序号从 1 开始编号。
 * 2. 一个元素越大，那么序号越大。如果两个元素相等，那么它们的序号相同。
 * 3. 每个数字的序号都应该尽可能地小
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
  let offset = 0
  const dict = [...arr].sort((n1, n2) => n1 - n2).reduce((m, n, i) => {
    if (!m[n]) {
      m[n] = i + 1 - offset
    } else {
      offset += 1
    }
    return m
  }, {})
  return arr.map(n => dict[n])
}
