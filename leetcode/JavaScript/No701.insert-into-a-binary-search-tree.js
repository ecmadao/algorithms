/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given the root node of a binary search tree (BST) and a value to be inserted into the tree, insert the value into the BST.
 * Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.
 * Note that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.
 *
 * For example,
 * Given the tree:
 *         4
 *        / \
 *       2   7
 *      / \
 *     1   3
 * And the value to insert: 5
 *
 * You can return this binary search tree:
 *          4
 *        /   \
 *       2     7
 *      / \   /
 *     1   3 5
 *
 * This tree is also valid:
 *          5
 *        /   \
 *       2     7
 *      / \
 *     1   3
 *          \
 *           4
 *
 * 给定二叉搜索树（BST）的根节点和要插入树中的值，将值插入二叉搜索树。
 * 返回插入后二叉搜索树的根节点。 保证原始二叉搜索树中不存在新值。
 * 注意，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。 你可以返回任意有效的结果
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  let node = root
  while (node) {
    if (node.val === val) return root

    if (node.val < val) {
      if (node.right) {
        node = node.right
      } else {
        node.right = new TreeNode(val)
        return root
      }
    } else {
      if (node.left) {
        node = node.left
      } else {
        node.left = new TreeNode(val)
        return root
      }
    }
  }

  return root || new TreeNode(val)
}
