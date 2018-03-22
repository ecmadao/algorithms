/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * We define a harmonious array is an array where the difference between its maximum value and its minimum value is exactly 1.
 * Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.
 *
 * Example:
 * Input: [1,3,2,2,5,2,3,7]
 * Output: 5
 * Explanation: The longest harmonious subsequence is [3,2,2,2,3].
 *
 * 给出一个数组，求最长子序列，该序列的最大值和最小值之差为1
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  const countTmp = {};
  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    countTmp[num] = countTmp[num] ? countTmp[num] + 1 : 1;
  }

  let preKey = null;
  let max = 0;
  const sortedKeys = Object.keys(countTmp).sort((a, b) => Number(a) - Number(b));
  for (const key of sortedKeys) {
    const num = Number(key);
    if (preKey !== null) {
      if (num - preKey === 1) {
        max = Math.max(max, countTmp[key] + countTmp[preKey]);
      }
    }
    preKey = num;
  }
  return max;
};
