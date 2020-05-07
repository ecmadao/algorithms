/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.
 *
 * Example 1:
 * Given tree s:
 *     3
 *    / \
 *   4   5
 *  / \
 * 1   2
 * Given tree t:
 *   4 
 *  / \
 * 1   2
 * Return true, because t has the same structure and node values with a subtree of s.
 *
 * Example 2:
 * Given tree s:
 *     3
 *    / \
 *   4   5
 *  / \
 * 1   2
 *    /
 *   0
 * Given tree t:
 *   4
 *  / \
 * 1   2
 * Return false.
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
    private bool IsSameTree(TreeNode n1, TreeNode n2) {
        if (n1 == null && n2 == null) return true;
        if (n1 == null || n2 == null) return false;

        return n1.val == n2.val && IsSameTree(n1.left, n2.left) && IsSameTree(n1.right, n2.right);
    }

    public bool IsSubtree(TreeNode s, TreeNode t) {
        if (s == null && t == null) return true;
        if (s == null || t == null) return false;
        return IsSameTree(s, t) || IsSubtree(s.left, t) || IsSubtree(s.right, t);
    }
}