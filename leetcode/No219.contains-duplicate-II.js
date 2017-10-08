/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array of integers and an integer k,
 * find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j]
 * and the absolute difference between i and j is at most k.
 *
 * 已知一个数组，判断数组内是否有重复值，且两个重复值索引只差小于等于 k
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  var tmp = {};
  for (var i = 0; i < nums.length; i += 1) {
    var num = nums[i];
    if (!tmp[num]) {
      tmp[num] = [i];
    } else {
      tmp[num].push(i);
    }
  }

  var keys = Object.keys(tmp);
  for (var i = 0; i < keys.length; i += 1) {
    var key = keys[i];
    var arr = tmp[key];
    if (arr.length === 1) continue;
    var success = false;

    for (var j = 0; j < arr.length - 1; j += 1) {
      if (arr[j + 1] - arr[j] <= k) {
        success = true;
        break;
      }
    }
    if (success) return success;
  }

  return false;
};
