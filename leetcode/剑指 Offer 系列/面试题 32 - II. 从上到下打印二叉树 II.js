/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
 *
 * 例如:
 * 给定二叉树: [3,9,20,null,null,15,7],
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 返回其层次遍历结果：
 * [
 *   [3],
 *   [9,20],
 *   [15,7]
 * ]
 *
 * 提示：
 * 1. 节点总数 <= 1000
 * 2. 注意：本题与主站 102 题相同：https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return []
  const queue = [root]
  const res = []

  while (queue.length) {
    let len = queue.length
    const list = []
    while (len) {
      const node = queue.shift()
      list.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      len -= 1
    }
    res.push(list)
  }
  return res
}
