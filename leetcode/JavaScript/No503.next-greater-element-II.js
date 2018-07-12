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

// Test case
console.log(nextGreaterElements([3, 8, 4, 1, 2])); // [8, -1, 8, 2, 3]
console.log(nextGreaterElements([1, 2, 1])); // [2, -1, 2]
