/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Follow up for "Remove Duplicates":
 * What if duplicates are allowed at most twice?
 *
 * Example 1:
 * Given nums = [1,1,1,2,2,3],
 * Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
 * It doesn't matter what you leave beyond the returned length.
 *
 * Example 2:
 * Given nums = [0,0,1,1,1,1,2,3,3],
 * Your function should return length = 7, with the first seven elements of nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively.
 * It doesn't matter what values are set beyond the returned length
 *
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现 2 次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成
 */

/**
* @param {number[]} nums
* @return {number}
*/
var removeDuplicates_1 = function(nums) {
  var tmp = {};
  for (i = 0; i < nums.length; i++) {
    var num = nums[i];
    if (!tmp[num]) {
      tmp[num] = 1;
      continue;
    }
    if (tmp[num] === 2) {
      nums.splice(i, 1);
      i--;
      continue;
    }
    tmp[num] += 1;
  }
  return nums.length;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates_2 = function(nums) {
  if (!nums.length) return 0

  let slow = 0
  let fast = 1
  let count = 1

  while (fast < nums.length) {
    if (nums[fast] === nums[slow]) {
      count += 1
      if (count === 2) {
        slow += 1
        nums[slow] = nums[fast]
      }
    } else {
      slow += 1
      count = 1
      nums[slow] = nums[fast]
    }
    fast += 1
  }
  return slow + 1
}
