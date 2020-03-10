/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree with N nodes, each node has a different value from {1, ..., N}.
 * A node in this binary tree can be flipped by swapping the left child and the right child of that node.
 * Consider the sequence of N values reported by a preorder traversal starting from the root.  Call such a sequence of N values the voyage of the tree.
 * (Recall that a preorder traversal of a node means we report the current node's value, then preorder-traverse the left child, then preorder-traverse the right child.)
 * Our goal is to flip the least number of nodes in the tree so that the voyage of the tree matches the voyage we are given.
 * If we can do so, then return a list of the values of all nodes flipped.  You may return the answer in any order.
 * If we cannot do so, then return the list [-1].
 *
 * Example 1:
 * Input: root = [1,2], voyage = [2,1]
 * Output: [-1]
 *
 * Example 2:
 * Input: root = [1,2,3], voyage = [1,3,2]
 * Output: [1]
 *
 * Example 3:
 * Input: root = [1,2,3], voyage = [1,2,3]
 * Output: []
 *
 * Note:
 * 1. 1 <= N <= 100
 *
 * 给定一个有 N 个节点的二叉树，每个节点都有一个不同于其他节点且处于 {1, ..., N} 中的值。
 * 通过交换节点的左子节点和右子节点，可以翻转该二叉树中的节点。
 * 考虑从根节点开始的先序遍历报告的 N 值序列。将这一 N 值序列称为树的行程。
 * （回想一下，节点的先序遍历意味着我们报告当前节点的值，然后先序遍历左子节点，再先序遍历右子节点。）
 * 我们的目标是翻转最少的树中节点，以便树的行程与给定的行程 voyage 相匹配。
 * 如果可以，则返回翻转的所有节点的值的列表。你可以按任何顺序返回答案。
 * 如果不能，则返回列表 [-1]
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
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function(root, voyage) {
  if (!root && !voyage.length) return []
  if (!root || !voyage.length) return [-1]

  const result = []
  const queue = [root]
  while (queue.length) {
    const node = queue.pop()
    const val = voyage.shift()
    if (node.val !== val) return [-1]
    if (node.right && voyage.length && node.right.val === voyage[0]) {
      if (node.left) {
        result.push(node.val)
        queue.push(node.left)
      }
      queue.push(node.right)
    } else {
      if (node.right) queue.push(node.right)
      if (node.left) queue.push(node.left)
    }
  }

  return result
}
