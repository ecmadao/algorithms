/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
 * The algorithm should run in linear time and in O(1) space.
 *
 * Example 1:
 * Input: [3,2,3]
 * Output: [3]
 *
 * Example 2:
 * Input: [1,1,1,3,3,2,2,2]
 * Output: [1,2]
 *
 * 给定一个大小为 n 的数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。
 * 说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1)。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement_1 = function(nums) {
  if (!nums.length) return [];
  nums.sort((a, b) => a - b);

  let pre = null;
  let count = 0;
  const result = [];
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === pre) {
      count += 1;
    } else {
      if (count > nums.length / 3) result.push(pre);
      pre = nums[i];
      count = 1;
    }
  }
  if (count > nums.length / 3) {
    result.push(pre);
  }
  return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * 摩尔投票
 * 要求输出的元素个数 > n / 3，则最多只会有两个元素
 */
var majorityElement_2 = function(nums) {
  let c1 = 0
  let c2 = 0
  let n1 = null
  let n2 = null
  for (const num of nums) {
    if (n1 === num) {
      c1 += 1
      continue
    }
    if (n2 === num) {
      c2 += 1
      continue
    }
    if (c1 === 0) {
      c1 = 1
      n1 = num
    } else if (c2 === 0) {
      c2 = 1
      n2 = num
    } else {
      c1 -= 1
      c2 -= 1
    }
  }

  c1 = 0
  c2 = 0
  for (const num of nums) {
    if (n1 === num) {
      c1 += 1
    } else if (n2 === num) {
      c2 += 1
    }
  }
  const res = []
  if (c1 > nums.length / 3) res.push(n1)
  if (c2 > nums.length / 3) res.push(n2)
  return res
}
