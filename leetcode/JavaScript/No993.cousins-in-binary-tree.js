/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.
 * Two nodes of a binary tree are cousins if they have the same depth, but have different parents.
 * We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.
 * Return true if and only if the nodes corresponding to the values x and y are cousins.
 *
 * Example 1:
 * Input: root = [1,2,3,4], x = 4, y = 3
 * Output: false
 *
 * Example 2:
 * Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
 * Output: true
 *
 * Example 3:
 * Input: root = [1,2,3,null,4], x = 2, y = 3
 * Output: false
 *
 * Note:
 * 1. The number of nodes in the tree will be between 2 and 100.
 * 2. Each node has a unique integer value from 1 to 100
 *
 * 在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。
 * 如果二叉树的两个节点深度相同，但父节点不同，则它们是一对堂兄弟节点。
 * 我们给出了具有唯一值的二叉树的根节点 root，以及树中两个不同节点的值 x 和 y。
 * 只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true。否则，返回 false
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  if (!root) return false

  root.depth = 0
  root.f = null
  const queue = [root]
  let nodeX = null
  let nodeY = null

  while (queue.length) {
    const node = queue.pop()
    if (node.val === x) {
      if (nodeY !== null) return node.depth === nodeY.depth && node.f !== nodeY.f
      nodeX = node
    } else if (node.val === y) {
      if (nodeX !== null) return node.depth === nodeX.depth && node.f !== nodeX.f
      nodeY = node
    }
    if (node.left) {
      node.left.depth = node.depth + 1
      node.left.f = node
      queue.push(node.left)
    }
    if (node.right) {
      node.right.depth = node.depth + 1
      node.right.f = node
      queue.push(node.right)
    }
  }

  return false
}
