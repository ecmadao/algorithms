/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given inorder and postorder traversal of a tree, construct the binary tree.
 *
 * Note:
 * You may assume that duplicates do not exist in the tree.
 *
 * 根据中序遍历和后序遍历还原树
 */

/**
 * 思路：
 * 对于后序遍历而言，按照 左子节点 -> 右子节点 -> 根节点 的顺序遍历
 * 因此，后序遍历的最后一位是当前树的根节点，类似于前序遍历的第一位
 * 故整体方法类似于 No105. Construct Binary Tree from Preorder and Inorder Traversal
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder 中序遍历
 * @param {number[]} postorder 后序遍历
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (!inorder.length || !postorder.length) return null

  const val = postorder.pop()
  const node = new TreeNode(val)

  const index = inorder.indexOf(val)
  const rightLen = inorder.length - 1 - index
  const leftLen = index

  node.left = buildTree(inorder.slice(0, index), postorder.slice(0, leftLen))
  node.right = buildTree(inorder.slice(index + 1), postorder.slice(postorder.length - rightLen))

  return node
}
