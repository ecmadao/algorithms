/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 请完成一个函数，输入一个二叉树，该函数输出它的镜像。
 * 例如输入：
 *      4
 *    /   \
 *   2     7
 *  / \   / \
 * 1   3 6   9
 * 
 * 镜像输出：
 *      4
 *    /   \
 *   7     2
 *  / \   / \
 * 9   6 3   1
 * 
 * 示例 1：
 * 输入：root = [4,2,7,1,3,6,9]
 * 输出：[4,7,2,9,6,3,1]
 * 
 * 限制：
 * 0 <= 节点个数 <= 1000
 * 注意：本题与主站 226 题相同：https://leetcode-cn.com/problems/invert-binary-tree/
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
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
  const dfs = (node) => {
    if (!node) return node
    const { left, right } = node
    node.right = dfs(left)
    node.left = dfs(right)
    return node
  }

  return dfs(root)
}
