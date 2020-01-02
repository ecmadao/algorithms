/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive),
 * prove that at least one duplicate number must exist.
 * Assume that there is only one duplicate number, find the duplicate one.
 *
 * Example 1:
 * Input: [1,3,4,2,2]
 * Output: 2
 *
 * Example 2:
 * Input: [3,1,3,4,2]
 * Output: 3
 *
 * Note:
 * 1. You must not modify the array (assume the array is read only).
 * 2. You must use only constant, O(1) extra space.
 * 3. Your runtime complexity should be less than O(n^2).
 * 4. There is only one duplicate number in the array, but it could be repeated more than once.
 *
 * 一个 n + 1 长度的数组，里面的数字取值范围为 [1, n]，且数组内有一个数字是重复的，要求找出这个数字
 * 注意：
 * 1. 不能修改数组
 * 2. 空间复杂度为 O(1)
 * 3. 时间复杂度低于 O(n^2)
 * 4. 数组内只有一个数字是重复的，不过可能重复多次
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  var duplicate = null;
  for (var i = 0; i < nums.length; i += 1) {
    for (var j = 0; j < nums.length; j += 1) {
      if (i === j) continue;
      if (nums[j] === nums[i]) {
        duplicate = nums[j];
        break;
      }
    }
    if (duplicate !== null) break;
  }
  return duplicate;
};

/* ======== method 2 ======== */
var findDuplicate = function(nums) {
  var duplicate = null;
  var obj = {};
  for (var i = 0; i < nums.length; i += 1) {
    var num = nums[i];
    obj[num] = obj[num] === undefined ? 1 : obj[num] + 1;
  }
  for (var i = 0; i < nums.length; i += 1) {
    if (obj[nums[i]] > 1) {
      duplicate = nums[i];
      break;
    }
  }
  return duplicate;
};

/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode-cn.com/problems/find-the-duplicate-number/solution/kuai-man-zhi-zhen-de-jie-shi-cong-damien_undoxie-d/
 */
var findDuplicate = function(nums) {
  let i = 0
  let j = 0

  while (true) {
    i = nums[i]
    j = nums[nums[j]]
    if (i === j) break
  }

  let k = nums[0]
  while (k !== nums[j]) {
    k = nums[k]
    j = nums[j]
  }
  return k
}
