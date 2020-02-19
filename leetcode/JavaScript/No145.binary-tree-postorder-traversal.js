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
const postorderTraversal_iteratively = (root) => {
  const result = []
  if (!root) return result

  const queue = [root]
  while (queue.length) {
    const node = queue.pop()
    result.push(node.val)
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
  return result.reverse()
}

const postorderTraversal_iteratively_2 = (root) => {
  const queue = []
  const result = []

  let node = root
  while (node || queue.length) {
    if (node) {
      result.push(node.val)
      queue.push(node)
      node = node.right
    } else {
      node = queue.pop()
      node = node.left
    }
  }
  return result.reverse()
}

/* ============================ Morris Solution ============================ */
/**
 * @param {TreeNode} root
 * @return {number[]}
 *
 * 利用特性：
 * 前序遍历是：中 -> 左 -> 右
 * 后序遍历是：左 -> 右 -> 中
 *
 * 因此我们只需要按照前序遍历的方式，以 中 -> 右 -> 左 顺序输出，最后反转即可
 */
var postorderTraversal_mirror = function(root) {
  let prev = null
  let node = root

  const result = []
  while (node) {
    if (!node.right) {
      result.push(node.val)
      node = node.left
    } else {
      prev = node.right
      while (prev.left && prev.left !== node) prev = prev.left
      if (prev.left === null) {
        prev.left = node
        result.push(node.val)
        node = node.right
      } else {
        prev.left = null
        node = node.left
      }
    }
  }

  return result.reverse()
}
