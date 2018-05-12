/**
 * Difficulty:
 * Medium
 *
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 * According to the definition of LCA on Wikipedia:
 * “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”
 *
 * Example:
 * Given the following binary search tree:  root = [3,5,1,6,2,0,8,null,null,7,4]
 *         _______3______
          /              \
        ___5__          ___1__
       /      \        /      \
      6      _2       0       8
            /  \
           7   4
 * Input: root, p = 5, q = 1
 * Output: 3
 * Explanation: The LCA of of nodes 5 and 1 is 3.
 *
 * Input: root, p = 5, q = 4
 * Output: 5
 * Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself
 * according to the LCA definition.
 */

/* ============== Solution 1 ============== */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor_1 = function(root, p, q) {
  if (!root) return root;
  const tmp = new Set([p, q]);
  let result = null;

  const find = (node) => {
    let count = 0;
    if (!node) return count;

    if (tmp.has(node)) {
      count += 1;
      tmp.delete(node);
    }
    if (!tmp.size) return count;

    const findLeft = find(node.left);
    if (findLeft === 2) return findLeft;
    count += findLeft;
    if (count === 2) {
      result = node;
      return count;
    }

    const findRight = find(node.right);
    if (findRight === 2) return findRight;
    count += findRight;
    if (count === 2) {
      result = node;
      return count;
    }
    return count;
  };

  find(root);
  return result;
};


/* ============== Solution 2 ============== */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor_2 = function(root, p, q) {
  if (!root) return root;
  if (root === p || root === q) return root;

  const left = lowestCommonAncestor_2(root.left, p, q);
  if (left && left !== p && left !== q) return left;

  const right = lowestCommonAncestor_2(root.right, p, q);
  if (!left) return right;
  return !right ? left : root;
};
