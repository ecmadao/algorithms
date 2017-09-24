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
