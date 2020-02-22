/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a set of distinct integers, nums, return all possible subsets.
 *
 * Example:
 * If nums = [1,2,3], a solution is:
 * [
 *    [3],
 *    [1],
 *    [2],
 *    [1,2,3],
 *    [1,3],
 *    [2,3],
 *    [1,2],
 *    []
 * ]
 *
 * Note:
 * The solution set must not contain duplicate subsets.
 *
 * 从数组中求出所有没有重复元素的组合
 * 跟上一题 No77.Combinations 一样的思路，只是稍微复杂了一点
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  var results = [[]];
  var max = nums.length;

  var chooseNum = function(result, min, layer, maxLayer) {
    for (var i = min + 1; i < max; i += 1) {
      result.push(nums[i]);
      if (layer === maxLayer) {
        results.push(result.slice(0));
      } else {
        chooseNum(result, i, layer + 1, maxLayer);
      }
      result.pop();
    }
  }

  for (var i = 0; i < nums.length; i += 1) {
    var num = nums[i];
    results.push([num]);
    var length = 2;
    while(length <= nums.length - i) {
      chooseNum([num], i, 2, length);
      length += 1;
    }
  }

  return results;
};

/**
 * Solution2:
 * 已知数组中没有重复元素，所以我们不用考虑过滤问题
 * 遍历数组，对于每一个元素，都把它加入到之前生成的子集中，返回一组新的子集，这个子集就是该元素所能够生成的子集
 * 然后把这组子集加入到要返回的结果中去
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets_2 = function(nums) {
  const results = [[]]

  for (const num of nums) {
    results.push(
      ...results.map(result => [num, ...result])
    )
  }
  return results
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 *
 * 对于每一位，都有选择、不选择两种
 */
var subsets_3 = function(nums) {
  const result = []

  const dfs = (index, arr) => {
    if (index >= nums.length) {
      result.push(arr.slice(0))
      return
    }
    dfs(index + 1, [...arr, nums[index]])
    dfs(index + 1, [...arr])
  }

  dfs(0, [])
  return result
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets_4 = function(nums) {
  const result = []

  const dfs = (index, arr) => {
    result.push(arr.slice(0))
    if (index >= nums.length) return

    for (let i = index; i < nums.length; i += 1) {
      arr.push(nums[i])
      dfs(i + 1, arr)
      arr.pop()
    }
  }

  dfs(0, [])
  return result
}
