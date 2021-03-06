/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a collection of integers that might contain duplicates, nums,
 * return all possible subsets (the power set).
 *
 * Note:
 * The solution set must not contain duplicate subsets.
 *
 * Example:
 * If nums = [1,2,2], a solution is:
 * [
 *  [2],
 * [1],
 * [1,2,2],
 * [2,2],
 * [1,2],
 * []
 * ]
 *
 * 和 No79. Subsets 差不多，但是数组中会有重复元素。
 * 先排序，然后当元素重复出现时，直接利用上一次的结果，在上一次产生的子集中分布加入当前元素，生成新的子集
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = (nums) => {
  nums.sort((a, b) => a - b);
  const results = [[]];
  let preArr = [];
  for (let i = 0; i < nums.length; i += 1) {
    let arr;
    if (i > 0 && nums[i] === nums[i - 1]) {
      arr = preArr.map((item) => {
        return [
          ...item,
          nums[i]
        ];
      });
    } else {
      arr = results.map((item) => {
        return [
          ...item,
          nums[i]
        ];
      });
    }
    results.push(...arr);
    preArr = arr;
  }
  return results;
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup_2 = function(nums) {
  nums = nums.sort((a, b) => a - b)
  const results = [[]]
  let pre = []

  for (let i = 0; i < nums.length; i += 1) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      pre = pre.map(result => [...result, nums[i]])
    } else {
      pre = results.map(result => [...result, nums[i]])
    }
    results.push(...pre)
  }
  return results
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup_3 = function(nums) {
  nums.sort((a, b) => a - b)
  const result = []

  const dfs = (index, arr) => {
    result.push(arr.slice(0))

    if (index >= nums.length) return

    for (let i = index; i < nums.length; i += 1) {
      if (i > index && nums[i] === nums[i - 1]) continue
      arr.push(nums[i])
      dfs(i + 1, arr)
      arr.pop()
    }
  }

  dfs(0, [])
  return result
}
