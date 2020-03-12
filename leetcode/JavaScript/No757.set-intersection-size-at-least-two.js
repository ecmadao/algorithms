/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * An integer interval [a, b] (for integers a < b) is a set of all consecutive integers from a to b, including a and b.
 * Find the minimum size of a set S such that for every integer interval A in intervals, the intersection of S with A has size at least 2.
 *
 * Example 1:
 * Input: intervals = [[1, 3], [1, 4], [2, 5], [3, 5]]
 * Output: 3
 * Explanation:
 * Consider the set S = {2, 3, 4}.  For each interval, there are at least 2 elements from S in the interval.
 * Also, there isn't a smaller size set that fulfills the above condition.
 * Thus, we output the size of this set, which is 3.
 *
 * Example 2:
 * Input: intervals = [[1, 2], [2, 3], [2, 4], [4, 5]]
 * Output: 5
 * Explanation:
 * An example of a minimum sized set is {1, 2, 3, 4, 5}.
 *
 * Note:
 * 1. intervals will have length in range [1, 3000].
 * 2. intervals[i] will have length 2, representing some integer interval.
 * 3. intervals[i][j] will be an integer in [0, 10^8]
 *
 * 一个整数区间 [a, b]  ( a < b ) 代表着从 a 到 b 的所有连续整数，包括 a 和 b。
 * 给你一组整数区间 intervals，请找到一个最小的集合 S，使得 S 里的元素与区间 intervals 中的每一个整数区间都至少有 2 个元素相交。
 * 输出这个最小集合 S 的大小
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function(intervals) {
  intervals.sort((i1, i2) => {
    if (i1[1] === i2[1]) return i2[0] - i1[0]
    return i1[1] - i2[1]
  })

  const res = [-1, -1]
  for (const interval of intervals) {
    if (interval[0] <= res[res.length - 2]) continue
    if (interval[0] > res[res.length - 1]) res.push(interval[1] - 1)
    res.push(interval[1])
  }
  return res.length - 2
}
