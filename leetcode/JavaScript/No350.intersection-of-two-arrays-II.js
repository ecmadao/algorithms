/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given two arrays, write a function to compute their intersection.
 *
 * Example:
 * Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
 *
 * Note:
 * Each element in the result should appear as many times as it shows in both arrays.
 * The result can be in any order.
 *
 * Follow up:
 * What if the given array is already sorted? How would you optimize your algorithm?
 * What if nums1's size is small compared to nums2's size? Which algorithm is better?
 * What if elements of nums2 are stored on disk,
 * and the memory is limited such that you cannot load all elements into the memory at once?
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const baseArr = nums1.length > nums2.length ? nums1 : nums2;
  const loopArr = nums1.length > nums2.length ? nums2 : nums1;
  const results = [];
  const tmp = {};

  for (let i = 0; i < baseArr.length; i += 1) {
    const num = baseArr[i];
    tmp[num] = tmp[num] !== undefined ? tmp[num] + 1 : 1;
  }
  for (let i = 0; i < loopArr.length; i += 1) {
    const num = loopArr[i];
    if (tmp[num]) {
      results.push(num);
      tmp[num] -= 1;
    }
  }
  return results;
};
