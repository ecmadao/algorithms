/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a binary search tree and the lowest and highest boundaries as L and R,
 * trim the tree so that all its elements lies in [L, R] (R >= L).
 * You might need to change the root of the tree,
 * so the result should return the new root of the trimmed binary search tree.
 *
 * Example:
 * Input:
      1
    / \
    0   2

    L = 1
    R = 2

 * Output:
    1
      \
       2
 *
 * Input:
      3
    / \
   0   4
    \
     2
    /
    1

    L = 1
    R = 3

 * Output:
        3
      /
     2
    /
   1
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
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
  if (!root) return root;
  const left = root.val < L ? null : trimBST(root.left, L, R);
  const right = root.val > R ? null : trimBST(root.right, L, R);

  if (root.val >= L && root.val <= R) {
    root.left = left;
    root.right = right;
    return root;
  }

  return left || right;
};
