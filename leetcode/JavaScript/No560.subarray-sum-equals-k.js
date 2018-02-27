/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array of integers and an integer k,
 * you need to find the total number of continuous subarrays whose sum equals to k.
 *
 * Example:
 * Input:nums = [1,1,1], k = 2
 * Output: 2
 *
 * Note:
 * 1. The length of the array is in range [1, 20,000].
 * 2. The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
 */

/**
 * 普通方法，会超时
 * 遍历数组，同时使用一个对象来计算从之前每一位到当前位上的和
 * 即遍历到 index = 3 时，对象中记录了 index 0 ~ 3, index 1~ 3, index 2 ~ 3 上个数字之和，
 * 各个和以它们起始的 index 做 key
 * 然后遍历对象，检查是否有满足 obj[key] = target - nums[i] 的键值对，同时对对象内各个值进行累加
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum_Time_Limit_Exceeded = function(nums, k) {
  var temp = {};
  var count = 0;

  for (var i = 0; i < nums.length; i += 1) {
    var num = nums[i];
    var offset = k - num;
    var keys = Object.keys(temp);

    if (num === k) count += 1;
    for (var j = 0; j < keys.length; j += 1) {
      var key = keys[j];
      if (temp[key] === offset) count += 1;
      temp[key] = temp[key] + num;
    }

    temp[i] = num;
  }

  return count;
};

/**
 * 更快的方法
 * 还是在遍历数组时记录之前元素之和，但是只需要记录从 index = 0 的首位到当前索引的和
 * 同时使用对象保存遍历期间所有的和
 * 即当 index = 3 时，对象中保存了 index 0 ~ 0, index 0 ~ 1, index 0 ~ 2 的 sum，
 * 并以 sum 值为 key，出现的次数为 value
 * 然后累加当前索引的值 sum += nums[i]，并通过 sum - target 获取到，如果想要有连续的和为 target 的子数组，
 * 则在当前索引之前的子数组内，必须有 sum - target 这个值
 * 具体含义如下：
 * 对于数组 [1, 2, 3, 4, 5]，target 为 7
 * 当遍历到 i = 3 时，num = nums[i] = 4，此时的 sum += num = 10，因此 sum - target = 10 - 7 = 3
 * 当前对象内保存的和有 1, 1 + 2 = 3, 1 + 2 + 3 = 6
 * 因此，存在 3 使得连续的子数组之和为 target = 7
 * 其实也就是相当于，从头开始截取一个较大的子数组 a, 并存在子数组 b，使得 a - b 后剩下的子数组之和为 target
 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  var temp = {
    0: 1
  };
  var sum = 0;
  var count = 0;

  for (var i = 0; i < nums.length; i += 1) {
    var num = nums[i];
    sum += num;
    count += temp[sum - k] === undefined ? 0 : temp[sum - k];
    temp[sum] = temp[sum] === undefined ? 1 : temp[sum] + 1;
  }

  return count;
};

