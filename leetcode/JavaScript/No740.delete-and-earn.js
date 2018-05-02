/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array nums of integers, you can perform operations on the array.
 * In each operation, you pick any nums[i] and delete it to earn nums[i] points.
 * After, you must delete every element equal to nums[i] - 1 or nums[i] + 1.
 * You start with 0 points.
 * Return the maximum number of points you can earn by applying such operations.
 *
 * Example:
 * Input: nums = [3, 4, 2]
 * Output: 6
 * Explanation:
 * Delete 4 to earn 4 points, consequently 3 is also deleted.
 * Then, delete 2 to earn 2 points. 6 total points are earned.
 *
 * Input: nums = [2, 2, 3, 3, 3, 4]
 * Output: 9
 * Explanation:
 * Delete 3 to earn 3 points, deleting both 2's and the 4.
 * Then, delete 3 again to earn 3 points, and 3 again to earn 3 points.
 * 9 total points are earned.
 *
 * Note:
 * The length of nums is at most 20000.
 * Each element nums[i] is an integer in the range [1, 10000].
 *
 * 思路：
 * 类似 House Robber 系列题目
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let pre;
  let earned = 0;
  let unearned = 0;
  for (const num of [...map.keys()].sort((a, b) => a - b)) {
    const t = earned;
    if (num - 1 !== pre) {
      earned = Math.max(unearned, earned) + num * map.get(num);
    } else {
      earned = num * map.get(num) + unearned;
    }
    unearned = Math.max(t, unearned);
    pre = num;
  }
  return Math.max(earned, unearned);
};

