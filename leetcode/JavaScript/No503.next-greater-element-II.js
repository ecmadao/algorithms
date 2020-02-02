/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every element.
 * The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number.
 * If it doesn't exist, output -1 for this number.
 *
 * Example:
 * Input: [1,2,1]
 * Output: [2,-1,2]
 * Explanation:
 * The first 1's next greater number is 2;
 * The number 2 can't find next greater number;
 * The second 1's next greater number needs to search circularly, which is also 2.
 *
 * Note:
 * The length of given array won't exceed 10000.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = (nums) => {
  const stack = [];
  const remains = [];
  const results = [];

  for (let i = nums.length - 1; i >= 0; i -= 1) {
    const num = nums[i];
    while (stack.length && stack[stack.length - 1] <= num) stack.pop();
    if (stack.length) {
      results[i] = stack[stack.length - 1];
    } else {
      remains.unshift(i);
    }
    stack.push(num);
  }

  for (let i = remains.length - 1; i >= 0; i -= 1) {
    const index = remains[i];
    const num = nums[index];
    while (stack.length && stack[stack.length - 1] <= num) stack.pop();
    results[index] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(num);
  }

  return results;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements_2 = function(nums) {
  const result = []

  for (let i = 0; i < nums.length; i += 1) {
    let index = i + 1 === nums.length ? 0 : i + 1
    let num = -1

    while (
      (index > i && index < nums.length) ||
      (index >= 0 && index < i)
    ) {
      if (nums[index] > nums[i]) {
        num = nums[index]
        break
      }
      index += 1
      if (index === nums.length) index = 0
    }
    result.push(num)
  }
  return result
}

/**
 * @param {number[]} nums
 * @return {number[]}
 * 单调递增栈
 * https://leetcode-cn.com/problems/next-greater-element-ii/solution/xia-yi-ge-geng-da-yuan-su-ii-by-leetcode/
 */
var nextGreaterElements_3 = function(nums) {
  const result = []
  const queue = []

  for (let i = nums.length * 2 - 1; i >= 0; i -= 1) {
    const index = i % nums.length
    while (queue.length) {
      const num = queue.shift()
      if (num > nums[index]) {
        queue.unshift(num)
        break
      }
    }
    result[index] = queue.length ? queue[0] : -1
    queue.unshift(nums[index])
  }
  return result
}

// Test case
console.log(nextGreaterElements([3, 8, 4, 1, 2])); // [8, -1, 8, 2, 3]
console.log(nextGreaterElements([1, 2, 1])); // [2, -1, 2]
