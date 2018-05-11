/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a sorted integer array without duplicates, return the summary of its ranges.
 *
 * Example:
 * Input:  [0,1,2,4,5,7]
 * Output: ["0->2","4->5","7"]
 * Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range.
 *
 * Input:  [0,2,3,4,6,8,9]
 * Output: ["0","2->4","6","8->9"]
 * Explanation: 2,3,4 form a continuous range; 8,9 form a continuous range.
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let queue = [];
  const result = [];

  const combine = () =>
    queue.length === 1 ? `${queue[0]}` : `${queue[0]}->${queue[queue.length - 1]}`;

  for (const num of nums) {
    if (!queue.length || num - 1 === queue[queue.length - 1]) {
      queue.push(num);
    } else {
      result.push(
        combine()
      );
      queue = [num];
    }
  }

  if (queue.length) {
    result.push(
      combine()
    );
  }
  return result;
};
