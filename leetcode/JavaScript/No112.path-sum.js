/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a binary tree and a sum,
 * determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
 *
 * Example:
 * Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
 * return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
 *
 * 检查二叉树是否存在一个完整的路径，路径上节点数值之和等于目标大小。
 * 深度优先遍历
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) return false

  const dfs = (node, num) => {
    num += node.val
    if (!node.left && !node.right) return num === sum

    if (node.left) {
      const check = dfs(node.left, num)
      if (check) return true
    }
    if (node.right) {
      const check = dfs(node.right, num)
      if (check) return true
    }
    return false
  }
  return dfs(root, 0)
}
