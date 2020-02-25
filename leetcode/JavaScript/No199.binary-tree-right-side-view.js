/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree, imagine yourself standing on the right side of it,
 * return the values of the nodes you can see ordered from top to bottom.
 *
 * Example:
 * Input: [1,2,3,null,5,null]
 * Output: [1, 3, 5]
 * Explanation:
 *    1           <---
    /   \
    2     3       <---
    \
    5             <---

 * 传入一个二叉树，求从树的右侧能够看见的节点的值。即，遍历二叉树的每一层，取每层最靠右边的第一个节点的值
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
var rightSideView = function(root) {
  if (!root) return []

  const result = []
  const queue = [root]

  while (queue.length) {
    let len = queue.length
    while (len) {
      const node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      len -= 1
      if (!len) result.push(node.val)
    }
  }
  return result
}
