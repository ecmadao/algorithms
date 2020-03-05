/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a Binary Search Tree (BST) with the root node root, return the minimum difference between the values of any two different nodes in the tree.
 *
 * Example:
 * Input: root = [4,2,6,1,3,null,null]
 * Output: 1
 * Explanation:
 * Note that root is a TreeNode object, not an array.
 * The given tree [4,2,6,1,3,null,null] is represented by the following diagram:
 *           4
 *         /   \
 *       2      6
 *      / \
 *     1   3
 * while the minimum difference in this tree is 1, it occurs between node 1 and node 2, also between node 3 and node 2.
 *
 * Note:
 * 1. The size of the BST will be between 2 and 100.
 * 2. The BST is always valid, each node's value is an integer, and each node's value is different.
 *
 * 给定一个二叉搜索树的根结点 root, 返回树中任意两节点的差的最小值
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
var minDiffInBST = function(root) {
  let min = Infinity

  const dfs = (node) => {
    if (!node || (!node.left && !node.right)) return

    let left = node.left
    while (left && left.right) left = left.right

    let right = node.right
    while (right && right.left) right = right.left

    if (left) min = Math.min(min, node.val - left.val)
    if (right) min = Math.min(min, right.val - node.val)

    if (min === 1) return

    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)
  return min
}
