/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a collection of numbers that might contain duplicates, return all possible unique permutations.
 *
 * Example:
 * [1,1,2] have the following unique permutations:
 * [
 *    [1,1,2],
 *    [1,2,1],
 *    [2,1,1]
 * ]
 *
 * 还是排列组合，但是数组内可能会有重复的数字。
 * 所以看见这题我是懵逼的，因为它的要求其实就是我在写 46 题时专门注意的点，即处理数组内的重复数字。
 * (所以说其实 46 题不用考虑处理重复数字的问题？？)
 * 直接用 46 题的代码直接 AC...
 */

var treeLayer = function(nums, path, layer, results, usedSet) {
  var pre = null;
  for (var i = 0; i < nums.length; i += 1) {
    var num = nums[i];
    var key = `${i}-${num}`;
    var set;

    if (!usedSet) {
      set = new Set();
    } else {
      set = new Set([...usedSet]);
    }

    if (set.has(key)) {
      continue;
    }
    if (pre === null) {
      pre = num;
    } else if (pre === num) {
      continue;
    }
    set.add(key);
    pre = num;

    var p = [...path, num];
    if (p.length === nums.length) {
      results.push(p);
    } else {
      treeLayer(nums, p, layer + 1, results, set);
    }
  }
};

/**
* @param {number[]} nums
* @return {number[][]}
*/
var permuteUnique = function(nums) {
  nums.sort((a, b) => a - b);
  var results = [];
  treeLayer(nums, [], 0, results);
  return results;
};