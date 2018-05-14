/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array of integers nums and a positive integer k,
 * find whether it's possible to divide this array into k non-empty subsets whose sums are all equal.
 *
 * Example:
 * Input: nums = [4, 3, 2, 3, 5, 2, 1], k = 4
 * Output: True
 * Explanation:
 * It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
 *
 * Note:
 * 1 <= k <= len(nums) <= 16.
 * 0 < nums[i] < 10000.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  if (k > nums.length) return false;

  const total = nums.reduce((pre, cur) => pre + cur, 0);
  if (total % k !== 0) return false;
  const target = total / k;
  const tmp = [];

  const search = (startIndex, current, K) => {
    if (K === 1 && current === target) return true;
    if (current === target) return search(0, 0, K - 1);

    for (let i = startIndex; i < nums.length; i += 1) {
      const num = nums[i];
      if (current + num <= target && !tmp[i]) {
        tmp[i] = true;
        const result = search(i + 1, current + num, K);
        if (result) return true;
        tmp[i] = false;
      }
    }
    return false;
  };

  return search(0, 0, k);
};
