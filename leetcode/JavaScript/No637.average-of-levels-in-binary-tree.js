/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a non-empty binary tree,
 * return the average value of the nodes on each level in the form of an array.
 *
 * Example 1:
 * Input:
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * Output: [3, 14.5, 11]
 * Explanation:
 * The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11.
 * Hence return [3, 14.5, 11].
 *
 * Note:
 * The range of node's value is in the range of 32-bit signed integer.
 *
 * 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组
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
var averageOfLevels = function(root) {
  const res = []
  if (!root) return res

  const queue = [root]
  while (queue.length) {
    const len = queue.length
    let i = len
    let count = 0
    while (i) {
      const node = queue.shift()
      count += node.val
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      i -= 1
    }
    res.push(count / len)
  }
  return res
}
