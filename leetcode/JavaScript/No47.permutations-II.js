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
 */

/* ===================================== SOLUTION 1 ======================================= */

/*
 * 思路一：
 * 多叉树
 */

var treeLayer = function(nums, path, layer, results, usedCacheSet) {
  let pre = null;
  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    const key = `${i}-${num}`;
    const set = usedCacheSet ? new Set([...usedCacheSet]) : new Set();

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

    const p = [...path, num];
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
var permuteUnique_tree = function(nums) {
  nums.sort((a, b) => a - b);
  const results = [];
  treeLayer(nums, [], 0, results);
  return results;
};

/* ===================================== SOLUTION 2 ======================================= */

/*
 * 思路二：
 * 1. 将列表中的每一个元素插入到由剩下元素组成的各个全排列列表的头部
 * 2. 给定列表的第一个元素，插入到剩下元素组成的全排列列表的各个位置
 * 3. 利用 set 避免重复遍历
 */

const permuteUnique_insert = (nums) => {
  const permute = (nums) => {
    if (nums.length === 1) return [[nums[0]]];
    const cache = new Set();

    const result = [];
    for (let i = 0; i < nums.length; i += 1) {
      const num = nums[i];
      if (cache.has(num)) continue;
      cache.add(num);
      const remains = [...nums.slice(0, i), ...nums.slice(i + 1)];
      const arrays = permute(remains);
      for (const array of arrays) {
        result.push(
          [num, ...array]
        );
      }
    }
    return result;
  };

  return permute(nums);
};