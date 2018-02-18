/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree, return the preorder traversal of its nodes' values.
 *
 * Example:
 * Given binary tree [1,null,2,3],
   1
    \
     2
    /
   3
 * return [1,2,3].
 *
 * Note:
 * Recursive solution is trivial, could you do it iteratively?
 *
 * 前序遍历树：根左右
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
var preorderTraversal_recursive = function(root) {
  const result = [];
  const preorder = (node) => {
      if (!node) return;
      result.push(node.val);
      preorder(node.left);
      preorder(node.right);
  };
  preorder(root);
  return result;
};

/* ============================ Iteratively Solution ============================ */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal_iteratively_1 = (root) => {
  if (!root) return [];
  const leftNodes = [root.left];
  const rightNodes = [root.right];
  const result = [root.val];

  while (leftNodes.length || rightNodes.length) {
    let node;
    if (leftNodes.length) {
      node = leftNodes.shift();
      if (node) {
        result.push(node.val);
        leftNodes.push(node.left);
        rightNodes.push(node.right);
        continue;
      }
    }
    if (rightNodes.length) {
      node = rightNodes.pop();
      if (node) {
        result.push(node.val);
        leftNodes.push(node.left);
        rightNodes.push(node.right);
      }
    }
  }
  return result;
};

/* ============================ Iteratively Solution ============================ */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal_iteratively_2 = (root) => {
  const result = [];
  let node = root;
  const nodes = [];
  while (node || nodes.length) {
    if (node) {
      result.push(node.val);
      nodes.push(node);
      node = node.left;
    } else {
      node = nodes.pop();
      node = node.right;
    }
  }
  return result;
};
