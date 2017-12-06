/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a binary tree, return the postorder traversal of its nodes' values.
 *
 * Example:
 * Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
 * return [3,2,1].
 *
 * Note:
 * Recursive solution is trivial, could you do it iteratively?
 *
 * 后序遍历树：左右根
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/* ============================ Recursive Solution ============================ */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal_recursive = function(root) {
  const result = [];
  const loop = (node) => {
      if (node) {
          loop(node.left);
          loop(node.right);
          result.push(node.val);
      }
  };
  loop(root);
  return result;
};

/* ============================ Iteratively Solution ============================ */
const noneAvailableLeft = (node) => !node.left || (node.left && node.left.visited);
const noneAvailableRight = (node) => !node.right || (node.right && node.right.visited);
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = (root) => {
  const result = [];
  let parentNode = null;
  while (root && !root.visited) {
    if (!root.parent) root.parent = parentNode;
    if (noneAvailableRight(root) && noneAvailableLeft(root)) {
      result.push(root.val);
      root.visited = true;
      root = root.parent;
    } else {
      if (root.left && !root.left.visited) {
        parentNode = root;
        root = root.left;
      } else if (root.right && !root.right.visited) {
        parentNode = root;
        root = root.right;
      }
    }
  }
  return result;
};
