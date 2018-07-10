/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a root node reference of a BST and a key, delete the node with the given key in the BST.
 * Return the root node reference (possibly updated) of the BST.
 * Basically, the deletion can be divided into two stages:
 * 1. Search for a node to remove.
 * 2. If the node is found, delete the node.
 *
 * Note:
 * Time complexity should be O(height of tree).
 *
 * Example:
 * root = [5,3,6,2,4,null,7]
 * key = 3

      5
     / \
    3   6
   / \   \
  2   4   7

 * Given key to delete is 3. So we find the node with value 3 and delete it.
 * One valid answer is [5,4,6,2,null,null,7], shown in the following BST.

      5
     / \
    4   6
   /     \
  2       7

 * Another valid answer is [5,2,6,null,4,null,7].

      5
     / \
    2   6
     \   \
      4   7
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (!root) return root;

  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else {
    if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    } else {
      let node = root.right;
      while (node && node.left) {
        node = node.left
      }
      root.val = node.val;
      root.right = deleteNode(root.right, node.val);
    }
  }
  return root;
};
