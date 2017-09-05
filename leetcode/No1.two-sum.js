/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var set = new Set(nums);
  var indexA = null; var indexB = null;
  for (let i = 0; i < nums.length; i += 1) {
      var numberA = nums[i];
      var numberB = target - numberA;
      if (set.has(numberB)) {
          var index = nums.indexOf(numberB);
          if (i === index) continue;
          indexA = i;
          indexB = index;
          break;
      }
  }
  if (indexA === null) throw new Error('Has no solution!');
  return [indexA, indexB];
};