/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 *
 * 例如，给出
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 * 返回如下的二叉树：
 *    3
 *   / \
 *  9  20
 *    /  \
 *   15   7
 *
 * 限制：
 * 0 <= 节点个数 <= 5000
 *
 * 注意：本题与主站 105 题重复：https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
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
