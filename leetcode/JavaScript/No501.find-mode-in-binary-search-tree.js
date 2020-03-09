/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.
 * Assume a BST is defined as follows:
 * 1. The left subtree of a node contains only nodes with keys less than or equal to the node's key.
 * 2. The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
 * 3. Both the left and right subtrees must also be binary search trees.
 *
 * For example:
 * Given BST [1,null,2,2],
 *    1
 *     \
 *      2
 *     /
 *    2
 * return [2].
 *
 * Note: If a tree has more than one mode, you can return them in any order.
 * Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).
 *
 * 给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。
 * 假定 BST 有如下定义：
 * 1. 结点左子树中所含结点的值小于等于当前结点的值
 * 2. 结点右子树中所含结点的值大于等于当前结点的值
 * 3. 左子树和右子树都是二叉搜索树
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
 * @return {number[]}
 */
var findMode = function(root) {
  if (!root) return []

  const map = {}
  const queue = [root]
  let repeat = 0
  let result = []

  while (queue.length) {
    const node = queue.pop()
    map[node.val] = (map[node.val] || 0) + 1
    if (map[node.val] > repeat) {
      repeat = map[node.val]
      result = [node.val]
    } else if (map[node.val] === repeat) {
      result.push(node.val)
    }
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }

  return result
}
