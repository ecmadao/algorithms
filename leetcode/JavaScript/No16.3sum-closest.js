/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. 
 * Return the sum of the three integers. You may assume that each input would have exactly one solution.
 *
 * Example:
 * given array S = {-1 2 1 -4}, and target = 1.
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 *
 * 跟 3Sum 类似，只是要求求出最接近于指定数的和
 */

var getTowClosest = function(nums, target) {
  var mapped = new Set();
  var result = nums[0] + nums[1];
  var i = 0;
  var j = nums.length - 1;

  while(i < j) {
    var num1 = nums[i];
    var num2 = nums[j];
    var num = num1 + num2;
    if (Math.abs(target - num) < Math.abs(target - result)) {
      result = num;
    }
    if (num > target) {
      j -= 1;
    } else if (num < target) {
      i += 1;
    } else {
      break;
    }
  }
  return result;
};

/**
* @param {number[]} nums
* @param {number} target
* @return {number}
* =========== 解法一 ===========
*/
var threeSumClosest_1 = function(nums, target) {
  nums.sort((a, b) => a - b);
  var length = nums.length;
  var mapped = new Set();
  var result = nums[0] + nums[1] + nums[2];
  if (length === 3) return result;

  for (var i = 0; i < length; i += 1) {
    if (length - i < 3) break;
    var num = nums[i];
    if (mapped.has(num)) continue;
    mapped.add(num);
    var towArray = nums.slice(i + 1);
    var closest = getTowClosest(towArray, target - num) + num;
    if (Math.abs(closest - target) < Math.abs(result - target)) {
      result = closest;
      if (result === target) break;
    }
  }
  return result;
};


/**
* @param {number[]} nums
* @param {number} target
* @return {number}
* =========== 解法二 ===========
*/
const threeSumClosest_2 = (nums, target) => {
  const sortedNums = nums.sort((a, b) => a - b);
  let result = nums[0] + nums[1] + nums[2];
  let diff = Math.abs(result - target);

  for (let i = 0; i < sortedNums.length; i += 1) {
    const num = sortedNums[i];
    let start = i + 1;
    let end = sortedNums.length - 1;

    while (start < end) {
      const sum = num + sortedNums[start] + sortedNums[end];
      if (sum === target) {
        return target;
      } else {
        if (Math.abs(sum - target) < diff) {
          diff = Math.abs(sum - target);
          result = sum;
        }
        if (sum < target) {
          start += 1;
        } else {
          end -= 1;
        }
      }
    }
  }
  return result;
};
