/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * After robbing those houses on that street,
 * the thief has found himself a new place for his thievery so that he will not get too much attention.
 * This time, all houses at this place are arranged in a circle. That means the first house is the neighbor of the last one.
 * Meanwhile, the security system for these houses remain the same as for those in the previous street.
 *
 * Given a list of non-negative integers representing the amount of money of each house,
 * determine the maximum amount of money you can rob tonight without alerting the police.
 *
 * 和 No198.House Robber 相比，假设给定的数组是一个首尾相连的环。
 * 则因此同样是要求不能有连续的两个房子相邻，所以数据实际上可以被分为 index: 0 ~ length - 2，和 index: 1 ~ length - 1 两组。
 * 其他地方和 No198.House Robber 思路一致
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length <= 1) return nums[0] || 0;
  let index = nums.length - 1;

  const from2 = {
    rob: nums[index],
    unrob: 0
  };
  index -= 1;

  const from1 = {
    rob: nums[index],
    unrob: 0
  };

  while (index >= 0) {
    const num = nums[index];

    if (index < nums.length - 2) {
      const tmp1 = from1.rob;
      from1.rob = num + from1.unrob;
      from1.unrob = Math.max(tmp1, from1.unrob);
    }
    if (index >= 1) {
      const tmp2 = from2.rob;
      from2.rob = num + from2.unrob;
      from2.unrob = Math.max(tmp2, from2.unrob);
    }
    index -= 1;
  }

  return Math.max(from1.rob, from1.unrob, from2.rob, from2.unrob);
};
