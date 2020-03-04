/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree, return the sum of values of nodes with even-valued grandparent.
 * (A grandparent of a node is the parent of its parent, if it exists.)
 * If there are no nodes with an even-valued grandparent, return 0.
 *
 * Example 1:
 * Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
 * Output: 18
 * Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.
 *
 * Constraints:
 * The number of nodes in the tree is between 1 and 10^4.
 * The value of nodes is between 1 and 100
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
var sumEvenGrandparent = function(root) {
  let result = 0
  if (!root) return 0

  // pos1 -> 父节点在祖父节点的位置
  // pos2 -> 子节点在父节点的位置
  const dfs = (node, grandParent, pos1, pos2) => {
    if (!node) return
    if (grandParent.val % 2 === 0) result += node.val

    dfs(node.left, grandParent[pos1], pos2, 'left')
    dfs(node.right, grandParent[pos1], pos2, 'right')
  }

  if (root.left) {
    dfs(root.left.left, root, 'left', 'left')
    dfs(root.left.right, root, 'left', 'right')
  }
  if (root.right) {
    dfs(root.right.left, root, 'right', 'left')
    dfs(root.right.right, root, 'right', 'right')
  }

  return result
}
