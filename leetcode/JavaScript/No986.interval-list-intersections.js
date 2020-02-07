/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given two lists of closed intervals, each list of intervals is pairwise disjoint and in sorted order.
 * Return the intersection of these two interval lists.
 *
 * Formally, a closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.
 * The intersection of two closed intervals is a set of real numbers that is either empty, or can be represented as a closed interval.
 *
 * For example, the intersection of [1, 3] and [2, 4] is [2, 3].
 *
 * 给定两个由一些闭区间组成的列表，每个区间列表都是成对不相交的，并且已经排序。
 * 返回这两个区间列表的交集。
 *
 * 形式上，闭区间 [a, b]（其中 a <= b）表示实数 x 的集合，而 a <= x <= b。两个闭区间的交集是一组实数，要么为空集，要么为闭区间。
 * 例如，[1, 3] 和 [2, 4] 的交集为 [2, 3]。）
 *
 * Example:
 * Input：A = [[0,2],[5,10],[13,23],[24,25]], B = [[1,5],[8,12],[15,24],[25,26]]
 * Output：[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
 *
 * Note:
 * 1. 0 <= A.length < 1000
 * 2. 0 <= B.length < 1000
 * 3. 0 <= A[i].start, A[i].end, B[i].start, B[i].end < 10^9
 */

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
  let result = []

  let i = 0
  let j = 0

  while (i < A.length && j < B.length) {
    const intervalA = A[i]
    const intervalB = B[j]

    let start = Math.max(intervalA[0], intervalB[0])
    let end = Math.min(intervalA[1], intervalB[1])

    if (intervalA[1] <= intervalB[1]) {
      i += 1
    } else {
      j += 1
    }

    if (start <= end) {
      result.push([start, end])
    }
  }

  return result
}
