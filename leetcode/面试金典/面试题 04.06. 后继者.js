/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 设计一个算法，找出二叉搜索树中指定节点的“下一个”节点（也即中序后继）。
 * 如果指定节点没有对应的“下一个”节点，则返回 null。
 *
 * 示例 1:
 * 输入: root = [2,1,3], p = 1
 *   2
 *  / \
 * 1   3
 *
 * 输出: 2
 * 示例 2:
 * 输入: root = [5,3,6,2,4,null,null,1], p = 6
 *       5
 *      / \
 *     3   6
 *    / \
 *   2   4
 *  /
 * 1
 * 输出: null
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
 * @param {TreeNode} p
 * @return {TreeNode}
 *
 * 直接中序遍历
 */
var inorderSuccessor_1 = function(root, p) {
  if (!root || !p) return null

  let node = root
  const queue = []

  while (node || queue.length) {
    if (node) {
      queue.push(node)
      node = node.left
    } else {
      node = queue.pop()
      if (node.val === p.val) {
        let next = node.right
        while (next && next.left) next = next.left
        return next || queue.slice(-1)[0] || null
      }
      node = node.right
    }
  }
  return null
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 *
 * 利用 二叉搜索树 性质
 */
var inorderSuccessor_1 = function(root, p) {
  if (!root || !p) return null

  if (root.val < p.val) return inorderSuccessor_1(root.right, p)

  if (root.val === p.val) {
    let r = root.right
    while (r && r.left) r = r.left
    return r
  } else {
    return inorderSuccessor_1(root.left, p) || root
  }
}
