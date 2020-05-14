/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given preorder and inorder traversal of a tree, construct the binary tree.
 *
 * Note:
 * You may assume that duplicates do not exist in the tree.
 * For example, given
 * preorder = [3,9,20,15,7]
 * inorder = [9,3,15,20,7]
 * Return the following binary tree:
 *    3
 *   / \
 *  9  20
 *    /  \
 *   15   7
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
    public TreeNode BuildTree(int[] preorder, int[] inorder) {
        if (preorder.Length == 0 || inorder.Length == 0) return null;

        int root = preorder[0];
        int index = Array.IndexOf(inorder, root);

        TreeNode node = new TreeNode(root);
        node.left = BuildTree(preorder[1..(index + 1)], inorder[0..index]);
        node.right = BuildTree(preorder[(index + 1)..], inorder[(index + 1)..]);
        return node;
    }
}