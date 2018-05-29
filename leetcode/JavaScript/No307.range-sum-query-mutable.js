/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.
 * The update(i, val) function modifies nums by updating the element at index i to val.
 *
 * Example:
 * Given nums = [1, 3, 5]
 * sumRange(0, 2) -> 9
 * update(1, 2)
 * sumRange(0, 2) -> 8
 *
 * Note:
 * 1. The array is only modifiable by the update function.
 * 2. You may assume the number of calls to update and sumRange function is distributed evenly.
 */

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  const sums = [];
  for (const num of nums) {
    sums.push(
      sums.length ? sums[sums.length - 1] + num : num
    );
  }
  this.sums = sums;
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
  const num = i === 0 ? this.sums[0] : this.sums[i] - this.sums[i - 1];
  const offset = val - num;
  for (let start = i; start < this.sums.length; start += 1) {
    this.sums[start] += offset;
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.sums[j] - (i > 0 ? this.sums[i - 1] : 0);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */
