/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an integer array nums,
 * find the sum of the elements between indices i and j (i ≤ j), inclusive.
 *
 * Example:
 * Given nums = [-2, 0, 3, -5, 2, -1]
 * sumRange(0, 2) -> 1
 * sumRange(2, 5) -> -1
 * sumRange(0, 5) -> -3
 *
 * Note:
 * You may assume that the array does not change.
 * There are many calls to sumRange function.
 */

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  const tmp = [];
  for (const num of nums) {
    tmp.push(num + (tmp.length ? tmp[tmp.length - 1] : 0));
  }
  this.tmp = tmp;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.tmp[j] - (i > 0 ? this.tmp[i - 1] : 0);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */
