/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given an array of non-negative integers,
 * you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Your goal is to reach the last index in the minimum number of jumps.
 *
 * Example:
 * Given array A = [2,3,1,1,4]
 * The minimum number of jumps to reach the last index is 2. (Jump 1 step from index 0 to 1, then 3 steps to the last index.)
 *
 * Note:
 * You can assume that you can always reach the last index.
 *
 * 给出一个数组，数组上各个位置的值代表你可以向后跳跃的索引，求问最少跳几次可以达到数组末尾
 * 例如，A = [2,3,1,1,4]，则在各个位置上时，代表最多可以向后跳跃 2，3，1，1，4 个索引
 * 我们的目标是从 index = 0 跳跃到 index = 4，则当 i = 0 时，向后跳 1 个索引；
 * 然后在 i = 1 时，向后跳 3 个索引，就可达到 i = 4
 */

/**
 * 思路：
 * 不需要针对每个位置上可能的取值去计算所有的可能性
 * 以 [2,3,1,1,4] 为例，
 * 当位于某个索引，例如 i = 0 时，根据它此时的取值 nums[i] = nums[0] = 2 可知
 * 从当前位置上向后跳跃最远可达到的索引为 i + nums[i] = 2，则从 0 遍历到 2，取其中某个位置上所能获得的最大跳跃数
 * 以此类推，直到累加的跳跃距离已经大于等于 nums.length - 1
 *
 * 注意：
 * 处理 nums 长度为 1 的情况，此时不需要跳跃就已经位于数组末端
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (nums.length === 1) return 0;
  var farthest = 0;
  var jumpCount = 0;
  var start = 0;
  var end = 0;
  while(farthest < nums.length - 1) {
    jumpCount += 1;
    var f = farthest;
    for (var i = start; i <= end; i += 1) {
      farthest = Math.max(farthest, i + nums[i]);
    }
    start = f + 1;
    end = farthest;
  }
  return jumpCount;
};

jump([0]);
jump([2,0,2,0,1]);
jump([2,3,1,1,4]);
jump([4,3,1,1,4]);
jump([1,1,1,1,4]);
jump([1,1,3,1,4]);
jump([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

/* ========================== ADVANCD ========================== */

/**
 * 一个更快的方法，在最慢的情况下也只有 O(n) 的复杂度
 * 我们从左向右遍历数组 nums，索引为 i，而 i + nums[i] 代表从当前位置上最远可以跳到的位置
 * 用 max 当前最远可以跳到的位置，初始为 0；用 current 保存最远可以跳到的位置，初始也为 0。
 * 遍历的过程中，每次都要更新 current 确保其有最大值：current = Math.max(current, i + nums[i])
 * 当 i > max 时，通过 max = current 来更新最远可以到达的距离，并且前进的步数 + 1
 * 而当 max >= nums.length - 1 时，代表已经到达末尾，可以退出循环
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  var max = 0;
  var current = 0;
  var jumpCount = 0;
  for (var i = 0; i < nums.length; i += 1) {
    if (max >= nums.length - 1) break;
    if (i > max) {
      max = current;
      jumpCount += 1;
    }
    current = Math.max(current, i + nums[i]);
  }
  return jumpCount;
};