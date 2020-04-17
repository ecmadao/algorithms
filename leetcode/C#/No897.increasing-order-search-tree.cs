/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree,
 * and every node has no left child and only 1 right child.
 *
 * Example 1:
 * Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]
 *       5
 *      / \
 *     3   6
 *    / \   \
 *   2   4   8
 *  /       / \ 
 * 1       7   9
 * Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
 *
 * Constraints:
 * The number of nodes in the given tree will be between 1 and 100.
 * Each node will have a unique integer value from 0 to 1000.
*/

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
    public TreeNode IncreasingBST(TreeNode root) {
        Stack<TreeNode> stack = new Stack<TreeNode>();

        TreeNode res = new TreeNode(0);
        TreeNode cur = res;
        while (root != null || stack.Count > 0) {
            if (root != null) {
                stack.Push(root);
                root = root.left;
            } else {
                root = stack.Pop();
                cur.right = new TreeNode(root.val);
                cur = cur.right;
                root = root.right;
            }
        }
        return res.right;
    }
}