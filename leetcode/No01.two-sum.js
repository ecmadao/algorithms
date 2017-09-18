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

/* =================== 普通法 ===================== */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * 普通方法：
 * 从头开始正常遍历数组，针对每个元素 nums[i] 求出 num = target - numss[i]
 * 然后查看 num 是否合法
 */
var twoSumFunc1 = function(nums, target) {
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

/* =================== 目前最快的方法 =================== */
// 不再利用 Set 进行 “数字是否存在” 的检查，而是使用 value 做键，index 做值
var twoSum = function(nums, target) {
  var data = {};
  for (var i = 0; i < nums.length; i += 1) {
    var num = nums[i];
    if (data[target - num] !== undefined) {
      return [data[target - num], i];
    } else {
      data[num] = i;
    }
  }
  return [];
};

/* =================== 两端向中央收缩法 =================== */
// 如果是要求求出具体的数字使得两者之和 = target，则可以使用两端向中央收缩法
// 这样的方法要求数据事先拍好了序，因此如果我们自己排序的话，则会打乱其原有索引，故不适合当前题目的要求
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * 两端向中央收缩法:
 * 1. 先对数组从小到大排序
 * 2. 取数组头尾（i = 0; j = length - 1）
 * 3. 两端向中央收缩：
 *    1. 如果两个数之和大于 target，则过大，右侧应该向左收缩
 *    2. 如果两个数之和小于 target，则过小，左侧应该向右收缩
 *    3. 正好相等时，查看数字是否已存在，如果是则继续遍历，否则记录当前的数字
 */
var twoSumFunc2 = function(nums, target) {
  nums.sort((a, b) => a - b);
  var i = 0;
  var j = nums.length - 1;
  var results = [];

  while(i < j) {
    var numA = nums[i];
    var numB = nums[j];

    if (numA + numB > target) {
      j -= 1;
    } else if (numA + numB < target) {
      i += 1;
    } else {
      results = [numA + numB];
      break;
    }
  }
  return results;
};