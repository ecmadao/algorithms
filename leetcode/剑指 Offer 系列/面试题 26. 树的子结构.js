/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 输入两棵二叉树A和B，判断 B 是不是 A 的子结构。(约定空树不是任意一个树的子结构)
 * B 是 A 的子结构， 即 A 中有出现和 B 相同的结构和节点值。
 *
 * 例如:
 * 给定的树 A:
 *      3
 *     / \
 *    4   5
 *   / \
 *  1   2
 * 给定的树 B：
 *    4
 *   /
 *  1
 * 返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。
 *
 * 示例 1：
 * 输入：A = [1,2,3], B = [3,1]
 * 输出：false
 *
 * 示例 2：
 * 输入：A = [3,4,5,1,2], B = [4,1]
 * 输出：true
 *
 * 限制：
 * 0 <= 节点个数 <= 10000
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B, allowSkip = true) {
  if (!A && !B) return true
  if (!A || !B) return false

  if (A.val === B.val) {
    return (B.left ? isSubStructure(A.left, B.left, false) : true) && (B.right ? isSubStructure(A.right, B.right, false) : true)
  }
  if (!allowSkip) return false

  return isSubStructure(A.left, B, allowSkip) || isSubStructure(A.right, B, allowSkip)
}