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
 * 求数组内元素的所有全排列。不必处理数值相同的元素
 * 例如，[1, 1, 2] 的全排列为 [1, 1, 2], [1, 2, 1], [2, 1, 1]
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
  if (nums.length === 1) return [[nums[0]]]

  const result = []
  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i]
    const remains = [...nums.slice(0, i), ...nums.slice(i + 1)]
    const arrays = permute_insert(remains)
    for (const array of arrays) {
      result.push(
        [num, ...array]
      )
    }
  }
  return result
}

/* ===================================== SOLUTION 3 ======================================= */

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 字典序法:
 * https://zh.wikipedia.org/wiki/%E5%85%A8%E6%8E%92%E5%88%97%E7%94%9F%E6%88%90%E7%AE%97%E6%B3%95#%E5%AD%97%E5%85%B8%E5%BA%8F%E6%B3%95
 * https://blog.csdn.net/u013309870/article/details/68941284
 * https://blog.csdn.net/lemon_tree12138/article/details/50986990
 *
 * 注：没有处理重复元素的情况
 */
var permute = function(nums) {
  nums.sort((a, b) => a - b)
  const results = [[...nums]]

  while (true) {
    let i = nums.length - 1
    while (i >= 1 && nums[i] < nums[i - 1]) {
      i -= 1
    }
    if (i === 0) break

    const index = i - 1
    const tmp = nums[index]
    let j = nums.length - 1

    while (j > index && nums[j] < tmp) {
      j -= 1
    }

    nums[index] = nums[j]
    nums[j] = tmp
    nums = [
      ...nums.slice(0, index + 1),
      ...nums.slice(index + 1).sort((a, b) => a - b)
    ]

    results.push([...nums])
  }

  return results
}
