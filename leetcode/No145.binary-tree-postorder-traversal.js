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

/* ============================ Iteratively Solution 1 ============================ */
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

/* ============================ Iteratively Solution 2 ============================ */

const postorderTraversal = (root) => {
  const result = [];
  let node = root;
  const nodes = [];
  const childNodeDone = (treeNode) => {
    if (!treeNode.left && !treeNode.right) return true;
    if (treeNode.left) {
      if (treeNode.left.done && (!treeNode.right || treeNode.right.done)) return true;
    }
    if (treeNode.right) {
      if (treeNode.right.done && (!treeNode.left || treeNode.left.done)) return true;
    }
    return false;
  };
  while (node || nodes.length) {
    if (node && !node.done) {
      nodes.push(node);
      node = node.left;
    } else {
      node = nodes.pop();
      if (childNodeDone(node)) {
        result.push(node.val);
        node.done = true;
        node = null;
      } else {
        nodes.push(node);
        node = node.right;
      }
    }
  }
  return result;
};
