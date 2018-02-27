/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.
 *
 * Example:
 * Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
 * return
 * [
 *  [5,4,11,2],
 *  [5,8,4,5]
 * ]
 *
 * 返回所有节点值之和等于目标数字的路径
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  const results = [];
  if (!root) return results;
  let result = [];
  const getSum = (node, preSum = 0) => {
    const curSum = preSum + node.val;
    result.push(node.val);
    if (!node.left && !node.right) {
      if (curSum === sum) {
        results.push(
          [...result]
        );
      }
    }
    if (node.left) {
      getSum(node.left, curSum);
    }
    if (node.right) {
      getSum(node.right, curSum);
    }
    result.pop();
  };
  getSum(root);
  return results
};
