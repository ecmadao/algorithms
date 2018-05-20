/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.
 * We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).
 *
 * Example:
 * Input: [4,2,3]
 * Output: True
 * Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
 *
 * Input: [4,2,1]
 * Output: False
 * Explanation: You can't get a non-decreasing array by modify at most one element.
 *
 * Note: The n belongs to [1, 10,000].
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let count = 0;
  let tmp = new Map();
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] < nums[i - 1]) {
      count += 1;

      if (count === 1) {
        const num = nums[i];
        nums[i] = nums[i - 1];
        tmp.set(i, num);
      }
    }
    if (count === 2) {
      if (!tmp.has(i - 1)) return false;
      nums[i - 2] = tmp.get(i - 1);
      nums[i - 1] = tmp.get(i - 1);
      if ((i <= 2 || (i > 2 && nums[i - 2] >= nums[i - 3])) && nums[i - 1] <= nums[i]) {
        count -= 1;
      } else {
        return false;
      }
    }
  }
  return true;
};

// Test case
console.log(checkPossibility([4,2,3])) // true
console.log(checkPossibility([4,2,1])) // false
console.log(checkPossibility([3,4,2,3])) // false
console.log(checkPossibility([3,4,2,5])) // true
