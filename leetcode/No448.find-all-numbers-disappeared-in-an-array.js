/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array),
 * some elements appear twice and others appear once.
 * Find all the elements of [1, n] inclusive that do not appear in this array.
 * Could you do it without extra space and in O(n) runtime?
 * You may assume the returned list does not count as extra space.
 *
 * 一个含有 n 个元素的数组，其中的数字应该从 1 到 n，依次加 1，例如，一个合法的数组可以是 [4, 5, 6, 3, 1, 2]
 * 但现在给出的数组内有不合法的数字，即可能会有数字重复，或者不在 [1, n] 范围内
 * 要求返回一个数组，包含了缺失的数字，要求时间、空间复杂度尽可能的低
 */

/**
 * 思路：
 * 遍历数组，把元素放到正确的位置上去，例如 [4, 5, 6, 3, 1, 2] -> [1, 2, 3, 4, 5, 6]
 * 此时 nums[i] === i + 1
 * 然后再遍历一次，寻找位置不对的数字，其索引 i 加 1 就是缺失的数字
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  for (var i = 0; i < nums.length; i += 1) {
    if (nums[i] != nums[nums[i] - 1]) {
      var num = nums[i];
      nums[i] = nums[num - 1];
      nums[num - 1] = num;
      i -= 1;
    }
  }
  var results = [];
  for (var i = 0; i < nums.length; i += 1) {
    var num = nums[i];
    if (num === i + 1) continue;
    results.push(i + 1);
  }
  return results;
};

