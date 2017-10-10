/**
 * Difficulty:
 * Medium
 *
 * Given an array of integers,
 * find out whether there are two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most t
 * and the absolute difference between i and j is at most k.
 *
 * 数组 nums 中是否存在两个索引 i 和 j，使得 |i - j| <= k 且 |nums[i] - nums[j]| <= t
 */

/**
 * 思路：
 * 滑动窗口：
 * 本质是双索引，两个索引初始位于同样的位置，例如 j = 0; i = 0，然后递增 i，并将每个遍历到的值存储起来，即在 tmp 中储存 [j, i] 范围内的取值，
 * 该范围的长度小于等于 k。当 i 遍历到边界，即 i >= k 时，删除 tmp 中第一个元素，以保证对象中储存的数据范围在 k 内
 *
 * 桶：
 * 给定一个范围，将数字划分到各个范围内。例如 t = 4，则 3 位于 [0, 4]（桶 0），5 位于 [5, 9]（桶 1）...
 * 而如果两个数只差小于等于 t，则这两个数要么位于一个桶内，要么可能处于相邻的桶内
 *
 * 因此思路如下：
 * 遍历数组，维护一个大小 <= k 的滑动窗口，以此保证任意两数的索引只差 <= k
 * 针对窗口内每个索引对应的数子，利用 t 求出其所属的桶，借此进行判断
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  if (t < 0 || k <= 0 || !nums.length) return false;
  var tmp = {};
  var w = t + 1;
  for (var i = 0; i < nums.length; i += 1) {
    var num = nums[i];
    var n = Math.floor(num / w);
    if (tmp[n] !== undefined) {
      return true;
    }
    if (tmp[n - 1] !== undefined && Math.abs(tmp[n - 1] - num) < w) {
      return true;
    }
    if (tmp[n + 1] !== undefined && Math.abs(tmp[n + 1] - num) < w) {
      return true;
    }
    tmp[n] = num;
    if (i >= k) delete tmp[Math.floor(nums[i - k] / w)];
  }
  return false;
};
