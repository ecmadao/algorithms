/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given an unsorted array of integers,
 * find the length of the longest consecutive elements sequence.
 *
 * Example:
 * Given [100, 4, 200, 1, 3, 2],
 * The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.
 * Your algorithm should run in O(n) complexity.
 *
 * 找出乱序的数组中可拼成的最长连续值的范围
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (!nums.length) return 0;
  const arr = [...new Set(nums)];
  arr.sort((a, b) => a - b);
  let pre = arr[0];
  let max = 1;
  let currentMax = 1;
  for (let i = 1; i < arr.length; i += 1) {
    const num = arr[i];
    if (num - pre === 1) {
      currentMax += 1;
    } else {
      if (currentMax > max) max = currentMax;
      currentMax = 1;
    }
    pre = num;
  }
  if (currentMax > max) max = currentMax;
  return max;
};
