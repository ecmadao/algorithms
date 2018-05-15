/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a non-empty array containing only positive integers,
 * find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.
 *
 * Example:
 * Input: [1, 5, 11, 5]
 * Output: true
 * Explanation: The array can be partitioned as [1, 5, 5] and [11].
 *
 * Input: [1, 2, 3, 5]
 * Output: false
 * Explanation: The array cannot be partitioned into equal sum subsets.
 *
 * Note:
 * Each of the array element will not exceed 100.
 * The array size will not exceed 200.
 */

 /**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  nums.sort((a, b) => a - b);
  const tmp = {};
  let total = nums.reduce((pre, cur) => pre + cur, 0);
  if (total % 2 !== 0) return false;
  const target = total / 2;

  const search = (from, cur) => {
    const tmp2 = {};
    if (cur === target) return total === target;

    for (let i = from; i < nums.length; i += 1) {
      const num = nums[i];
      if (tmp[i] || tmp2[num]) continue;
      if (cur + num > target) return false;
      if (cur + num > total) return false;

      tmp[i] = true;
      total -= num;
      const result = search(i + 1, cur + num);
      if (result) {
        return true;
      } else {
        tmp2[num] = true;
      }
      total += num;
      tmp[i] = false;
    }

    return false;
  };

  return search(0, 0);
};

// Test case
console.log(canPartition([1,1,1,1]))
console.log(canPartition([1,2,3,4,5,6,7]))
console.log(canPartition([1, 5, 11, 5]))
console.log(canPartition([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,100]))
console.log(canPartition([1, 2, 3, 5]))
