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
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  const tmp = {};
  const maxTmp = {};
  for (const num of nums) {
    tmp[num] = tmp[num] ? tmp[num] + 1 : 1;
  }

  const earn = (remain) => {
    const keys = Object.keys(remain);
    if (!keys.length) return 0;
    const num = parseInt(keys[0], 10);
    if (maxTmp[num]) return maxTmp[num];
    const count = remain[num];

    // earn current num
    delete remain[num];
    const tmp1 = remain[num + 1];
    const tmp2 = remain[num - 1];
    delete remain[num + 1];
    delete remain[num - 1];
    const earned = num * count + earn(remain);

    if (tmp2) remain[num - 1] = tmp2;
    if (tmp1) remain[num + 1] = tmp1;
    const unearned = earn(remain);

    if (tmp2) remain[num - 1] = tmp2;
    if (tmp1) remain[num + 1] = tmp1;
    remain[num] = count;

    const max = Math.max(earned, unearned);
    maxTmp[num] = max;
    return max;
  };

  return earn(tmp);
};
