/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
 * You may assume that the intervals were initially sorted according to their start times.
 *
 * Example:
 * 1. Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].
 * 2. Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].
 *
 * 向一个由很多区间组成的数组中插入一个新的区间，如果新区间和数组中的任意区间有重叠，则进行合并，否则直接插入
 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

var mergeOverlap = function(intervalA, intervalB) {
  var start = intervalA.start <= intervalB.start ? intervalA.start : intervalB.start;
  var end = intervalA.end >= intervalB.end ? intervalA.end : intervalB.end;
  return new Interval(start, end);
};

/**
* @param {Interval[]} intervals
* @param {Interval} newInterval
* @return {Interval[]}
*/
var insert = function(intervals, newInterval) {
  var results = [];
  var index = null;
  for (var i = 0; i < intervals.length; i += 1) {
    var interval = intervals[i];
    if (interval.start > newInterval.end) {
      index = i;
      break;
    } else if (interval.end < newInterval.start) {
      results.push(interval);
    } else {
      newInterval = mergeOverlap(interval, newInterval);
    }
  }
  results.push(newInterval);
  return index !== null ? results.concat(intervals.slice(index)) : results;
};