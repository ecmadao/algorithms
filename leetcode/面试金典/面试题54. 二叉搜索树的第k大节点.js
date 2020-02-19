/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 给定一棵二叉搜索树，请找出其中第k大的节点。
 *
 * 示例 1:
 * 输入: root = [3,1,4,null,2], k = 1
 *   3
 *  / \
 * 1   4
 *  \
 *  2
 * 输出: 4
 *
 * 示例 2:
 * 输入: root = [5,3,6,2,4,null,null,1], k = 3
 *        5
 *       / \
 *      3   6
 *     / \
 *    2   4
 *   /
 *  1
 * 输出: 4
 *
 * 限制：
 * 1 ≤ k ≤ 二叉搜索树元素个数
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
 * @param {number} k
 * @return {number}
 *
 * 按照 右 -> 中 -> 左 顺序遍历即可
 */
var kthLargest = function(root, k) {
  if (!root || !k) return null

  let node = root
  const queue = []

  while (node || queue.length) {
    if (node) {
      queue.push(node)
      node = node.right
    } else {
      node = queue.pop()
      k -= 1
      if (!k) return node.val
      node = node.left
    }
  }
}
