/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an integer n,
 * generate all structurally unique BST's (binary search trees) that store values 1...n.
 *
 * Example:
 * Given n = 3, your program should return all 5 unique BST's shown below.

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
 *
 * 和 No96 类似，但不同的是不是要列出树的数目，而是要罗列所有可能的树
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  const cache = {};
  const array = [];
  for (let i = 1; i <= n; i += 1) {
    array.push(i);
  }
  if (!array.length) return [];
  const getTrees = (arr) => {
    if (cache[arr.join('')]) return cache[arr.join('')];
    const len = arr.length;
    const results = [];
    if (!len) return [null];
    if (len === 1) return [new TreeNode(arr[0])];
    if (len === 2) {
      const root1 = new TreeNode(arr[0]);
      root1.right = new TreeNode(arr[1]);
      results.push(root1);
      const root2 = new TreeNode(arr[1]);
      root2.left = new TreeNode(arr[0]);
      results.push(root2);
      return results;
    }
    for (let i = 0; i < arr.length; i += 1) {
      const leftTrees = getTrees(arr.slice(0, i));
      const rightTrees = getTrees(arr.slice(i + 1));
      for (let l = 0; l < leftTrees.length; l += 1) {
        for (let j = 0; j < rightTrees.length; j += 1) {
          const node = new TreeNode(arr[i]);
          node.left = leftTrees[l];
          node.right = rightTrees[j];
          results.push(node);
        }
      }
    }
    cache[arr.join('')] = results;
    return results;
  };
  return getTrees(array);
};
