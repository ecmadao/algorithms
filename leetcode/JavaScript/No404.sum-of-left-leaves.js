/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Find the sum of all left leaves in a given binary tree.
 *
 * Example:
       3
      / \
     9  20
       /  \
      15   7
 * There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
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
var sumOfLeftLeaves_1 = function(root) {
  const isLeave = node => node && !node.left && !node.right;

  let sum = 0;
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (!node) continue;
    if (node.left) {
      if (isLeave(node.left)) {
        sum += node.left.val;
      } else {
        queue.push(node.left);
      }
    }
    if (node.right) queue.push(node.right);
  }
  return sum;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves_2 = function(root) {
  if (!root) return 0

  let left = 0
  if (root.left && !root.left.left && !root.left.right) {
    left = root.left.val
  } else {
    left = sumOfLeftLeaves_2(root.left)
  }

  return left + sumOfLeftLeaves_2(root.right)
}
