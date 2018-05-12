/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
 * According to the definition of LCA on Wikipedia:
 * “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”
 *
 * Example:
 * Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]
 *         _______6______
          /              \
        ___2__           __8__
       /      \         /     \
      0      _4_       7      9
            /   \
           3    5
 * Input: root, p = 2, q = 8
 * Output: 6
 * Explanation: The LCA of nodes 2 and 8 is 6.
 *
 * Input: root, p = 2, q = 4
 * Output: 2
 * Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself
 * according to the LCA definition.
 *
 * 寻找一棵二叉搜索树中两个节点的最近公共祖先。
 * 最近公共祖先：最近公共祖先是两个节点所有公共祖先中离根节点最远的
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (!root) return root;
  if (root.val <= p.val && root.val >= q.val) return root;
  if (root.val >= p.val && root.val <= q.val) return root;
  if (root.val < p.val) return lowestCommonAncestor(root.right, p, q);
  return lowestCommonAncestor(root.left, p, q);
};
