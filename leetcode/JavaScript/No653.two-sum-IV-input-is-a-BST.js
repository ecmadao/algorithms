/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a Binary Search Tree and a target number,
 * return true if there exist two elements in the BST such that their sum is equal to the given target.
 *
 * Example:
 * Input:
 *    5
 *   / \
 *  3   6
 *  / \   \
 * 2   4   7
 * Target = 9
 * Output: True
 *
 * Input:
 *    5
 *   / \
 *  3   6
 *  / \   \
 * 2   4   7
 * Target = 28
 * Output: False
 *
 * 还是 Two sum 问题，不过这次的输入变成了二叉树，而且只需要返回树中是否存在两个不同的数，使得和为 target
 */

// 深度遍历来搜索是否存在目标值
var dfs = function(tree, target) {
  if (!tree) return false;
  if (target > tree.val) {
    return dfs(tree.right, target);
  } else if (target < tree.val) {
    return dfs(tree.left, target);
  }
  return true;
};

/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/
/**
* @param {TreeNode} root
* @param {number} k
* @return {boolean}
*/
var findTarget = function(root, k) {
  // 广度遍历来确定第一个值，然后做差求出第二个值
  // 之后通过深度遍历来搜索
  var bfs = function(nodes, target) {
    if (!nodes.length) return false;
    var childs = [];
    for (var i = 0; i < nodes.length; i += 1) {
      var node = nodes[i];
      if (!node) continue;
      var val = target - node.val;
      if (val !== node.val) {
        if (dfs(root, val)) return true;
      }
      if (node.left) {
        childs.push(node.left);
      }
      if (node.right) {
        childs.push(node.right);
      }
    }
    return bfs(childs, target);
  };
  return bfs([root], k);
};