/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an integer array with all positive numbers and no duplicates,
 * find the number of possible combinations that add up to a positive integer target.
 *
 * Example:
 * nums = [1, 2, 3]
 * target = 4
 *
 * The possible combination ways are:
 * (1, 1, 1, 1)
 * (1, 1, 2)
 * (1, 2, 1)
 * (1, 3)
 * (2, 1, 1)
 * (2, 2)
 * (3, 1)
 *
 * Note that different sequences are counted as different combinations.
 * Therefore the output is 7.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4_1 = function(nums, target) {
  nums.sort((a, b) => a - b);
  const tmp = {};

  const find = (t) => {
    if (t === 0) return 1;
    let count = 0;

    for (const num of nums) {
      if (t < num) return count;
      if (tmp[t - num] !== undefined) {
        count += tmp[t - num];
        continue;
      }
      tmp[t - num] = find(t - num);
      count += tmp[t - num];
    }
    return count;
  };

  const count = find(target);
  return count;
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * 动态规划 DP
 */
var combinationSum4_2 = function(nums, target) {
  const dp = Array.from({ length: target + 1 }, (_, i) => i === 0 ? 1 : 0)
  nums.sort((n1, n2) => n1 - n2)

  for (let i = 1; i <= target; i += 1) {
    for (let j = 0; j < nums.length; j += 1) {
      if (nums[j] > i) break
      dp[i] += dp[i - nums[j]]
    }
  }

  return dp[target]
}
