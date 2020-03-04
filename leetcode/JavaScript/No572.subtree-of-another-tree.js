/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s.
 * A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.
 *
 * Example 1:
 * Given tree s:
 *      3
 *     / \
 *    4   5
 *   / \
 *  1   2
 * Given tree t:
 *    4
 *   / \
 *  1   2
 * Return true, because t has the same structure and node values with a subtree of s.
 *
 * Example 2:
 * Given tree s:
 *      3
 *     / \
 *    4   5
 *   / \
 *  1   2
 *     /
 *    0
 * Given tree t:
 *    4
 *   / \
 *  1   2
 * Return false.
 *
 * 给定两个非空二叉树 s 和 t，检验 s 中是否包含和 t 具有相同结构和节点值的子树。s 的一个子树包括 s 的一个节点和这个节点的所有子孙。s 也可以看做它自身的一棵子树
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const isSameTree = function(t1, t2) {
  if (!t1 && !t2) return true
  if (!t1 || !t2) return false
  return t1.val === t2.val && isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right)
}

/**
* @param {TreeNode} s
* @param {TreeNode} t
* @return {boolean}
*/
var isSubtree = function(t1, t2) {
  if (!t1 && !t2) return true
  if (!t1 || !t2) return false

  return isSameTree(t1, t2) || isSubtree(t1.left, t2) || isSubtree(t1.right, t2)
}

// Test case
// [3,4,5,1,2,null,null,0]
// [4,1,2]

// [1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,2]
// [1,null,1,null,1,null,1,null,1,null,1,2]

// [3,4,5,1,null,2]
// [3,1,2]