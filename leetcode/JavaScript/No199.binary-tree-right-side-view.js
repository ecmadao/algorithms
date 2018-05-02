/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree, imagine yourself standing on the right side of it,
 * return the values of the nodes you can see ordered from top to bottom.
 *
 * Example:
 * Input: [1,2,3,null,5,null]
 * Output: [1, 3, 5]
 * Explanation:
 *    1           <---
    /   \
    2     3       <---
    \
    5             <---

 * 传入一个二叉树，求从树的右侧能够看见的节点的值。即，遍历二叉树的每一层，取每层最靠右边的第一个节点的值
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  const results = [];
  if (!root) return results;

  const queue = [{
    index: 0,
    node: root
  }];

  while (queue.length) {
    const {
      node,
      index,
    } = queue.shift();

    if (results.length === index) results.push(node.val);

    if (node.right) queue.push({
      index: index + 1,
      node: node.right
    });
    if (node.left) queue.push({
      index: index + 1,
      node: node.left
    });
  }
  return results;
};
