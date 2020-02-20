/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * You are given a list of non-negative integers, a1, a2, ..., an, and a target, S.
 * Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.
 * Find out how many ways to assign symbols to make sum of integers equal to target S.
 *
 * Example:
 * Input: nums is [1, 1, 1, 1, 1], S is 3.
 * Output: 5
 * Explanation:
 * -1+1+1+1+1 = 3
 * +1-1+1+1+1 = 3
 * +1+1-1+1+1 = 3
 * +1+1+1-1+1 = 3
 * +1+1+1+1-1 = 3
 * There are 5 ways to assign symbols to make the sum of nums be target 3.
 *
 * Note:
 * The length of the given array is positive and will not exceed 20.
 * The sum of elements in the given array will not exceed 1000.
 * Your output answer is guaranteed to be fitted in a 32-bit integer.
 */

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays_1 = function(nums, S) {
  let count = 0;

  const find = (index, cur) => {
    if (index >= nums.length) {
      if (cur === S) count += 1;
      return;
    }
    const num = nums[index];
    // +
    find(index + 1, cur + num);
    // -
    find(index + 1, cur - num);
  };

  find(0, 0);
  return count;
};

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 *
 * 动态规划
 */
var findTargetSumWays_2 = function(nums, S) {
  const dp = Array.from({ length: nums.length + 1 }, (_, i) => ({}))
  const sum = nums.reduce((n1, n2) => n1 + n2)
  if (sum < S) return 0

  dp[0][0] = 1

  for (let i = 1; i <= nums.length; i += 1) {
    for (let j = -sum; j <= sum; j += 1) {
      dp[i][j] = Math.max(
        dp[i][j] || 0,
        (dp[i - 1][j - nums[i - 1]] || 0) + (dp[i - 1][j + nums[i - 1]] || 0)
      )
    }
  }

  return dp[nums.length][S] || 0
}
