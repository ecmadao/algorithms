/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a binary tree, find the length of the longest path where each node in the path has the same value.
 * This path may or may not pass through the root.
 *
 * Example:
 * Input:

              5
             / \
            4   5
           / \   \
          1   1   5
 * Output:
 * 2
 *
 * Input:

              1
             / \
            4   5
           / \   \
          4   4   5
 * Output:
 * 2
 *
 * Note:
 * The length of path between two nodes is represented by the number of edges between them.
 * The given binary tree has not more than 10000 nodes. The height of the tree is not more than 1000.
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
 * @return {number}
 */
var longestUnivaluePath = function(root) {
  let result = 0;

  const search = (node, target) => {
    if (!node) return 0;
    if (!node.left && !node.right) {
      return node.val === target ? 1 : 0;
    }
    const left = search(node.left, node.val);
    const right = search(node.right, node.val);

    result = Math.max(result, left + right);

    return node.val === target ? Math.max(left, right) + 1 : 0;
  };
  search(root, null);
  return result;
};
