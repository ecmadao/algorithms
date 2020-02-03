/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array of integers with possible duplicates, randomly output the index of a given target number. You can assume that the given target number must exist in the array.
 * 
 * Note:
 * The array size can be very large. Solution that uses too much extra space will not pass the judge.
 * 
 * Example:
 * int[] nums = new int[] {1,2,3,3,3};
 * Solution solution = new Solution(nums);
 * // pick(3) should return either index 2, 3, or 4 randomly. Each index should have equal probability of returning.
 * solution.pick(3);
 * // pick(1) should return 0. Since in the array only nums[0] is equal to 1.
 * solution.pick(1);
 * 
 * 给定一个可能含有重复元素的整数数组，要求随机输出给定的数字的索引。 可以假设给定的数字一定存在于数组中。
 * 注意：
 * 数组大小可能非常大。 使用太多额外空间的解决方案将不会通过测试
 * 
 * 要求 O(n) 的空间复杂度，属于蓄水池抽样问题
 * https://zh.wikipedia.org/wiki/水塘抽樣
 * https://zhuanlan.zhihu.com/p/41348264
 */

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums
}

/** 
* @param {number} target
* @return {number}
*
* 蓄水池抽样法
*/
Solution.prototype.pick = function(target) {
  let count = 0
  let result = 0

  for (let i = 0; i < this.nums.length; i += 1) {
    if (this.nums[i] === target) {
      count += 1
      if (Math.floor(Math.random() * count) === 0) {
        result = i
      }
    }
  }
  return result
}

/** 
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.pick(target)
*/
