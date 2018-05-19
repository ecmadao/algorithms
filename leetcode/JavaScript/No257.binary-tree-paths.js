/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a binary tree, return all root-to-leaf paths.
 *
 * Example:
 * Input:

       1
     /   \
    2     3
     \
      5

 * Output: ["1->2->5", "1->3"]
 * Explanation: All root-to-leaf paths are: 1->2->5, 1->3
 *
 * Note: A leaf is a node with no children.
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const results = [];

  const dfs = (node, arr) => {
    if (!node) return;
    arr.push(node.val);
    if (!node.left && !node.right) {
      results.push(arr.join('->'));
    } else {
      node.left && dfs(node.left, arr);
      node.right && dfs(node.right, arr);
    }
    arr.pop();
  };

  dfs(root, []);
  return results;
};
