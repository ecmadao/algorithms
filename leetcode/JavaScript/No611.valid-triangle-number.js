/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array consists of non-negative integers,
 * your task is to count the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.
 *
 * Example:
 * Input: [2,2,3,4]
 * Output: 3
 * Explanation:
 * Valid combinations are:
 * 2,3,4 (using the first 2)
 * 2,3,4 (using the second 2)
 * 2,2,3
 *
 * Note:
 * - The length of the given array won't exceed 1000.
 * - The integers in the given array are in the range of [0, 1000].
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  nums.sort((a, b) => a - b);
  let count = 0;

  // 任意两边之和大于第三边
  const isValidate = (arr, num) => {
    if (arr.length < 2) return true;
    const num1 = arr[0];
    const num2 = arr[1];
    if (num1 + num2 > num && num1 + num > num2 && num2 + num > num1) return true;
    return false;
  };

  const findEdge = (fromIndex, arr) => {
    if (arr.length === 3) {
      count += 1;
      return;
    }
    for (let i = fromIndex; i < nums.length; i += 1) {
      const num = nums[i];
      if (isValidate(arr, num)) {
        arr.push(num);
        findEdge(i + 1, arr);
        arr.pop();
      } else {
        break;
      }
    }
  };

  findEdge(0, []);
  return count;
};
