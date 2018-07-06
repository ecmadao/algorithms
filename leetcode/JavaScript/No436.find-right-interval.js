/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a set of intervals, for each of the interval i, check if there exists an interval j whose start point is bigger than or equal to the end point of the interval i,
 * which can be called that j is on the "right" of i.
 * For any interval i, you need to store the minimum interval j's index,
 * which means that the interval j has the minimum start point to build the "right" relationship for interval i.
 * If the interval j doesn't exist, store -1 for the interval i. Finally, you need output the stored value of each interval as an array.
 *
 * Note:
 * - You may assume the interval's end point is always bigger than its start point.
 * - You may assume none of these intervals have the same start point.
 *
 * Example:
 * Input: [ [1,2] ]
 * Output: [-1]
 * Explanation: There is only one interval in the collection, so it outputs -1.
 *
 * Input: [ [3,4], [2,3], [1,2] ]
 * Output: [-1, 0, 1]
 * Explanation:
 * There is no satisfied "right" interval for [3,4].
 * For [2,3], the interval [3,4] has minimum-"right" start point;
 * For [1,2], the interval [2,3] has minimum-"right" start point.
 *
 * Input: [ [1,4], [2,3], [3,4] ]
 * Output: [-1, 2, -1]
 * Explanation:
 * There is no satisfied "right" interval for [1,4] and [3,4].
 * For [2,3], the interval [3,4] has minimum-"right" start point.
 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

function Interval(start, end) {
  this.start = start;
  this.end = end;
}

function Node(index, interval) {
  this.index = index;
  this.interval = interval;
  this.left = null;
  this.right = null;
}

/**
 * @param {Interval[]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
  if (!intervals.length) return [];
  const head = new Node(0, intervals[0]);
  const results = [-1];

  for (let i = 1; i < intervals.length; i += 1) {
    const interval = intervals[i];
    const { start, end } = interval;

    let node = head;
    while (node) {
      if (node.interval.start > start) {
        if (end <= node.interval.start) {
          if (!results[i] || end > intervals[results[node.index]].end) {
            results[i] = node.index;
          }
        }
        if (!node.left) {
          node.left = new Node(i, interval);
          if (results[i] === undefined) results[i] = -1;
          break;
        } else {
          node = node.left;
        }
      } else {
        if (start >= node.interval.end) {
          if (results[node.index] === -1 || start < intervals[results[node.index]].start) {
            results[node.index] = i;
          }
        }
        if (!node.right) {
          node.right = new Node(i, interval);
          results[i] = -1;
          break;
        } else {
          node = node.right;
        }
      }
    }
  }

  return results;
};

// Test case
console.log(findRightInterval(
  [
    new Interval(1, 2)
  ]
));
console.log(findRightInterval(
  [
    new Interval(3, 4),
    new Interval(2, 3),
    new Interval(1, 2)
  ]
));
console.log(findRightInterval(
  [
    new Interval(1, 4),
    new Interval(2, 3),
    new Interval(3, 4)
  ]
));
