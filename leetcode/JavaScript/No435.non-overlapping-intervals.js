/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
 *
 * Example 1:
 * Input: [[1,2],[2,3],[3,4],[1,3]]
 * Output: 1
 * Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.
 *
 * Example 2:
 * Input: [[1,2],[1,2],[1,2]]
 * Output: 2
 * Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.
 *
 * Example 3:
 * Input: [[1,2],[2,3]]
 * Output: 0
 * Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
 *
 * Note:
 * 1. You may assume the interval's end point is always bigger than its start point.
 * 2. Intervals like [1,2] and [2,3] have borders "touching" but they don't overlap each other.
 *
 * 给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。
 * 注意:
 * 1. 可以认为区间的终点总是大于它的起点。
 * 2. 区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 *
 * 贪心算法
 * 按照区间结束值从小到大排序，每次取结束时间最早的区间，然后删除和它有重叠的区间
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((i1, i2) => {
    if (i1[1] === i2[1]) return i1[0] - i2[0]
    return i1[1] - i2[1]
  })

  let count = 0
  let interval = intervals[0]

  let i = 1
  while (i < intervals.length) {
    if (intervals[i][0] < interval[1]) {
      count += 1
    } else {
      interval = intervals[i]
    }
    i += 1
  }
  return count
}
