/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a collection of distinct numbers, return all possible permutations.
 *
 * Example:
 * [1,2,3] have the following permutations:
 * [
 *    [1,2,3],
 *    [1,3,2],
 *    [2,1,3],
 *    [2,3,1],
 *    [3,1,2],
 *    [3,2,1]
 * ]
 *
 * 求数组内元素的所有排列组合。注意处理数值相同的元素
 * 例如，[1, 1, 2] 的排列组合为 [1, 1, 2], [1, 2, 1], [2, 1, 1]
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
var permute = function(nums) {
  nums.sort((a, b) => a - b);
  var results = [];
  treeLayer(nums, [], 0, results);
  return results;
};