/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array),
 * some elements appear twice and others appear once.
 * Find all the elements that appear twice in this array.
 * Could you do it without extra space and in O(n) runtime?
 *
 * Example:
 * Input:
 * [4,3,2,7,8,2,3,1]
 * Output:
 * [2,3]
 *
 * 给出一个包含数字全部在 [1, n] 范围内的，长度为 n 的数组。理想状态下数字内的数字相互不重复，即从 1 到 n 逐步递增 1
 * 但现在数组内元素有重复，即存在只出现一次和只出现两次的数字
 * 要求返回由重复的数字组成的数组
 */

/**
 * 思路一：
 * 将数组按照一定顺序排列：[1, 3, 4, 2] -> [1, 2, 3, 4]
 * 即每个数字排列到其索引 + 1 的位置：nums[i] = i + 1
 * 然后遍历数组进行检查，如果 nums[i] = nums[nums[i] - 1] 且 i !== nums[i] - 1，则是重复元素
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates_1 = function(nums) {
  var results = [];
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] != nums[nums[i] - 1]) {
      var num = nums[i];
      nums[i] = nums[num - 1];
      nums[num - 1] = num;
      i -= 1;
    }
  }
  for (var i = 0; i < nums.length; i += 1) {
    var num = nums[i];
    if (num === nums[num - 1] && i !== num - 1) {
      results.push(num);
    }
  }
  return results;
};

/**
 * 思路二：
 * 遍历数组，将 Math.abs(nums[i]) - 1 对应的数字标记为负数。如果之后继续遍历到 j，
 * 而 nums[nums[j] - 1] < 0，则证明已经出现过，为重复的数字
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates_2 = function(nums) {
  const result = []

  for (let i = 0; i < nums.length; i += 1) {
    const num = Math.abs(nums[i])
    if (nums[num - 1] < 0) {
      result.push(num)
    } else {
      nums[num - 1] = -nums[num - 1]
    }
  }
  return result
}
