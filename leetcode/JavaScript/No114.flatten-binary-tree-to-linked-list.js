/**
 * Difficulty:
 * Medium
 * 
 * Desc:
 * Given a binary tree, flatten it to a linked list in-place.
 * 
 * Example:
 * Given

         1
        / \
       2   5
      / \   \
     3   4   6
 * The flattened tree should look like:
   1
    \
     2
      \
       3
        \
         4
          \
           5
            \
             6
 *
 * Hints:
 * If you notice carefully in the flattened tree,
 * each node's right child points to the next node of a pre-order traversal.
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
var flatten = function(root) {
  if (root) {
    flatten(root.left);
    flatten(root.right);

    let flattenLeft = root.left;
    if (flattenLeft) {
      root.left = null;
      const flattenRight = root.right;
      root.right = flattenLeft;
      while (flattenLeft.right) {
        flattenLeft = flattenLeft.right;
      }
      flattenLeft.right = flattenRight;
    }
  }
};
