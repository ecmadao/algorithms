/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Two elements of a binary search tree (BST) are swapped by mistake.
 * Recover the tree without changing its structure.
 *
 * Note:
 * A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  let preNode = null;
  let node1 = null;
  let node2 = null;

  const inorderTraversal = (node) => {
    if (node.left) inorderTraversal(node.left);
    if (preNode !== null && preNode.val > node.val) {
      if (node1 === null) {
        node1 = preNode;
        node2 = node;
      } else {
        node2 = node;
      }
    }
    preNode = node;
    if (node.right) inorderTraversal(node.right);
  };

  inorderTraversal(root);
  const tmp = node1.val;
  node1.val = node2.val;
  node2.val = tmp;
};
