/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a non-empty integer array of size n,
 * find the minimum number of moves required to make all array elements equal,
 * where a move is incrementing n - 1 elements by 1.
 *
 * Example:
 * Input:
 * [1,2,3]
 *
 * Output:
 * 3
 *
 * Explanation:
 * Only three moves are needed (remember each move increments two elements):
 * [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  // n 代表数组长度，m 代表移动次数，sum 代表原数组总和，x 代表移动后数组内各元素的值（各元素大小相等）
  // 由题意，每次移动 (n - 1) 个元素，每个元素只能增加 1。因此移动后带来的数组增量为 m * (n - 1)
  // 因此 sum + m * (n - 1) = x * n
  // sum + m * (n - 1) = x * n

  // 因为初始数组内最小的值 min，每次都会被移动，因此最终值一定是 min + m
  // x = min + m
  // sum + m * (n - 1) = (min + m) * n
  // sum - min * n = m * n - m * (n - 1) = m
  const sum = nums.reduce((pre, cur) => pre + cur, 0);
  return sum - Math.min(...nums) * nums.length;
};