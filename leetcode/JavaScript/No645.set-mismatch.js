/**
 * Difficulty:
 * Easy
 * 
 * Desc:
 * The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set,
 * which results in repetition of one number and loss of another number.
 * Given an array nums representing the data status of this set after the error.
 * Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.
 * 
 * Example:
 * Input: nums = [1,2,2,4]
 * Output: [2,3]
 * 
 * Note:
 * - The given array size will in the range [2, 10000].
 * - The given array's numbers won't have any order.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  const tmp = {};
  const set = new Set(nums);
  let duplicate;
  for (const num of nums) {
    if (tmp[num]) {
      duplicate = num;
      break;
    }
    tmp[num] = 1;
  }
  const result = [duplicate];
  for (let i = 1; i <= nums.length; i += 1) {
    if (!set.has(i)) {
      result.push(i);
      break;
    }
  }
  return result;
};
