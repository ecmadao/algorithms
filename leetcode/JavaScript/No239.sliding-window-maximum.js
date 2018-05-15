/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right.
 * You can only see the k numbers in the window. Each time the sliding window moves right by one position.
 * Return the max sliding window.
 *
 * Example:
 * Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
 * Output: [3,3,5,5,6,7]
 * Explanation:
 * Window position                Max
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * 1 [3  -1  -3] 5  3  6  7       3
 * 1  3 [-1  -3  5] 3  6  7       5
 * 1  3  -1 [-3  5  3] 6  7       5
 * 1  3  -1  -3 [5  3  6] 7       6
 * 1  3  -1  -3  5 [3  6  7]      7
 *
 * Note:
 * You may assume k is always valid, 1 ≤ k ≤ input array's size for non-empty array.
 *
 * Follow up:
 * Could you solve it in linear time?
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (k <= 1) return nums;
  const results = [];

  const getMaxIndex = (from, to) => {
    let maxIndex = from;
    for (let i = from + 1; i <= to; i += 1) {
      if (nums[i] >= nums[maxIndex]) maxIndex = i;
    }
    return maxIndex;
  };

  let maxIndex = getMaxIndex(0, k - 1);
  results.push(nums[maxIndex]);

  let i = 1;
  while (i <= nums.length - k) {
    while (i <= maxIndex && i <= nums.length - k) {
      const last = nums[i + k - 1];
      if (last >= nums[maxIndex]) maxIndex = i + k - 1;
      results.push(nums[maxIndex]);
      i += 1;
    }
    maxIndex = getMaxIndex(i, i + k - 1);
  }

  return results;
};
