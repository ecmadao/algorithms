/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
 *
 * Example:
 * this binary tree [1,2,2,3,4,4,3] is symmetric:
    1
   / \
  2   2
 / \ / \
3  4 4  3
 * But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
 *
 * 判断一个二叉树是否对称
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const isLayerSymmetric = (nodes) => {
    if (!nodes.length) return true;
    const childs = [];
    for (let i = 0; i < nodes.length / 2; i += 1) {
      const node = nodes[i];
      const symmetricNode = nodes[nodes.length - 1 - i];
      if (node && symmetricNode) {
        if (node.val !== symmetricNode.val) return false;
        childs[i * 2] = node.left;
        childs[i * 2 + 1] = node.right;
        childs[nodes.length * 2 - 1 - i * 2] = symmetricNode.right;
        childs[nodes.length * 2 - 2 - i * 2] = symmetricNode.left;
      } else if (!node && !symmetricNode) {
        continue;
      } else {
        return false;
      }
    }
    return isLayerSymmetric(childs.filter(item => item !== undefined));
  }
  if (!root) return true;
  return isLayerSymmetric([root.left, root.right]);
};