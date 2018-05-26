/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree, return all duplicate subtrees.
 * For each kind of duplicate subtrees, you only need to return the root node of any one of them.
 * Two trees are duplicate if they have the same structure with same node values.
 *
 * Example:
 *         1
          / \
        2   3
       /   / \
      4   2   4
         /
        4
 * The following are two duplicate subtrees:
      2
     /
    4
 * and
    4
 * Therefore, you need to return above trees' root in the form of a list.
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  const tmp = new Map();
  const results = [];
  if (!root || (!root.left && !root.right)) return results;

  const find = (node) => {
    if (!node) return `#`;
    const v1 = `${node.val}-${find(node.left)}-${find(node.right)}`;
    if (tmp.get(v1) === 1) {
      results.push(node);
    }
    tmp.set(v1, (tmp.get(v1) || 0) + 1);
    return v1;
  };

  find(root);
  return results;
};
