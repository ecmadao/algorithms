/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree, return the zigzag level order traversal of its nodes' values.
 * (ie, from left to right, then right to left for the next level and alternate between).
 *
 * Example:
 * Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
 * return its zigzag level order traversal as:
 * [
 *  [3],
 *  [20,9],
 *  [15,7]
 * ]
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
var zigzagLevelOrder = function(root) {
  const result = []
  if (!root) return result
  root.index = 0
  const queue = [root]

  while (queue.length) {
    const node = queue.shift()
    if (!result[node.index]) result[node.index] = []
    if (node.index % 2 === 0) {
      result[node.index].push(node.val)
    } else {
      result[node.index].unshift(node.val)
    }

    const nextIndex = node.index + 1
    if (node.left) {
      node.left.index = nextIndex
      queue.push(node.left)
    }
    if (node.right) {
      node.right.index = nextIndex
      queue.push(node.right)
    }
  }

  return result
}
