/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree, return the sum of values of its deepest leaves.
 *
 * Example 1:
 * Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
 * Output: 15
 *
 * Constraints:
 * 1. The number of nodes in the tree is between 1 and 10^4.
 * 2. The value of nodes is between 1 and 100.
 *
 * 给你一棵二叉树，请你返回层数最深的叶子节点的和
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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
  const queue = [root]
  let sum = 0

  while (queue.length) {
    let len = queue.length
    sum = 0
    while (len) {
      const node = queue.shift()
      sum += node.val
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      len -= 1
    }
  }
  return sum
}
