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
  intervals = intervals.sort((i1, i2) => i1[0] - i2[0])

  const mergeIntervals = (interval1, interval2) => {
    const left1 = interval1[0]
    const right1 = interval1[1]
    const left2 = interval2[0]
    const right2 = interval2[1]

    if (left1 <= left2 && right1 >= right2) {
      return [interval1]
    }
    if (left2 <= left1 && right2 >= right1) {
      return [interval2]
    }
    if (left2 <= right1 && left2 >= left1 && right1 <= right2) {
      return [[left1, right2]]
    }
    if (left1 <= right2 && left1 >= left2 && right2 <= right1) {
      return [[left2, right1]]
    }

    return [interval1, interval2]
  }

  return intervals.reduce((list, interval, index) => {
    list.push(interval)
    while (true && list.length >= 2) {
      const target = list.pop()
      const pre = list.pop()
      const merged = mergeIntervals(pre, target)
      list.push(...merged)

      if (merged.length === 2) {
        break
      }
    }

    return list
  }, [])
}
