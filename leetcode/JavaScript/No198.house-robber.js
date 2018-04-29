/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed,
 * the only constraint stopping you from robbing each of them is that
 * adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
 *
 * Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
 */



/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums.length) return 0;

  let index = nums.length - 1;
  let rob = nums[index];
  let unrob = 0;
  index -= 1;

  while (index >= 0) {
    const tmp = rob;
    rob = nums[index] + unrob;
    unrob = Math.max(tmp, unrob);
    index -= 1;
  }

  return Math.max(rob, unrob);
};
