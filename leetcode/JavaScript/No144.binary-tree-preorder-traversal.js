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
const preorderTraversal_iteratively = (root) => {
  if (!root) return []
  const queue = [root]
  const result = []

  while (queue.length) {
    const node = queue.pop()
    result.push(node.val)
    if (node.right) queue.push(node.right)
    if (node.left) queue.push(node.left)
  }
  return result
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal_iteratively_2 = (root) => {
  const queue = []
  const result = []

  let node = root
  while (node || queue.length) {
    if (node) {
      result.push(node.val)
      queue.push(node)
      node = node.left
    } else {
      node = queue.pop()
      node = node.right
    }
  }
  return result
}

/* ============================ Morris Solution ============================ */
// TODO:
