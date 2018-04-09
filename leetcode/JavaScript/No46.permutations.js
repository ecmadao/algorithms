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
 * 求数组内元素的所有排列组合。不必处理数值相同的元素
 * 例如，[1, 1, 2] 的排列组合为 [1, 1, 2], [1, 2, 1], [2, 1, 1]
 */

/* ===================================== SOLUTION 1 ======================================= */

/*
 * 思路一：
 * 多叉树
 */

var treeLayer = function(nums, path, layer, results, usedSet) {
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
var permute_tree = function(nums) {
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
 */

const permute_insert = (nums) => {
  // 该方法没有处理列表中含有相同元素时的情况，即 [1,1] 会被全排列为 [1,1]
  if (nums.length === 1) return [[nums[0]]];

  const result = [];
  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    const remains = [...nums.slice(0, i), ...nums.slice(i + 1)];
    const arrays = permute_insert(remains);
    for (const array of arrays) {
      result.push(
        [num, ...array]
      );
    }
  }
  return result;
};
