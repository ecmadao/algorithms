/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a collection of intervals, merge all overlapping intervals.
 *
 * Example:
 * Given [1,3],[2,6],[8,10],[15,18],
 * return [1,6],[8,10],[15,18].
 *
 * 给一系列数组，数组内取值有重叠，要求合并重叠的数组
 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a.start - b.start);
  var results = [];
  for (var i = 0; i < intervals.length; i += 1) {
    var interval = intervals[i];
    if (i + 1 < intervals.length) {
      if (interval.end >= intervals[i + 1].start) {
        intervals[i + 1] = new Interval(
          interval.start,
          interval.end > intervals[i + 1].end ? interval.end : intervals[i + 1].end
        );
      } else {
        results.push(interval);
      }
    } else {
      results.push(interval);
    }
  }
  return results;
};

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((i1, i2) => i1[0] - i2[0])

  return intervals.reduce((list, interval, index) => {
    if (index > 0) {
      const pre = list.pop()
      if (pre[1] >= interval[0]) {
        list.push([pre[0], Math.max(interval[1], pre[1])])
      } else {
        list.push(pre, interval)
      }
    } else {
      list.push(interval)
    }
    return list
  }, [])
}
