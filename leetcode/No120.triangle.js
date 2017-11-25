/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a triangle, find the minimum path sum from top to bottom.
 * Each step you may move to adjacent numbers on the row below.
 *
 * Example:
 * Given the following triangle
 * [
 *    [2],
 *   [3,4],
 *  [6,5,7],
 * [4,1,8,3]
 * ]
 * The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
 *
 * Test case:
 * [
 *    [-1],
 *   [2,3],
 *  [1,-1,-1]
 * ]
 */

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const tmp = {};
  const getSum = (index, preSum, numIndex) => {
    if (index >= triangle.length) return preSum;
    if (tmp[`${index}-${numIndex}`] !== undefined) {
        return tmp[`${index}-${numIndex}`] + preSum;
    }

    const arr = triangle[index];
    const leftSum = getSum(index + 1, preSum + arr[numIndex], numIndex);
    const rightSum = getSum(index + 1, preSum + arr[numIndex + 1], numIndex + 1);
    const min = Math.min(leftSum, rightSum);
    tmp[`${index}-${numIndex}`] = min - preSum;
    return min;
  };
  return getSum(1, triangle[0][0], 0);
};
