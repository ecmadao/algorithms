/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Shuffle a set of numbers without duplicates.
 *
 * Example:
 * // Init an array with set 1, 2, and 3.
 * int[] nums = {1,2,3};
 * Solution solution = new Solution(nums);
 *
 * // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
 * solution.shuffle();
 *
 * // Resets the array back to its original configuration [1,2,3].
 * solution.reset();
 *
 * // Returns the random shuffling of array [1,2,3].
 * solution.shuffle();
 *
 * 打乱一个没有重复元素的数组。即洗牌问题
 */

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.raw = [...nums]
};

/**
* Resets the array to its original configuration and return it.
* @return {number[]}
*/
Solution.prototype.reset = function() {
  return [...this.raw]
};

/**
* Returns a random shuffling of the array.
* @return {number[]}
*/
Solution.prototype.shuffle = function() {
  const nums = [...this.raw]
  for (let i = 1; i < nums.length; i += 1) {
    const index = Math.floor(Math.random() * (i + 1))
    const tmp = nums[index]
    nums[index] = nums[i]
    nums[i] = tmp
  }
  return nums
};

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.reset()
* var param_2 = obj.shuffle()
*/
