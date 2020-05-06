/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree, determine if it is a complete binary tree.
 * Definition of a complete binary tree from Wikipedia:
 * In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible.
 * It can have between 1 and 2h nodes inclusive at the last level h.
 *
 * Example 1:
 * Input: [1,2,3,4,5,6]
 * Output: true
 * Explanation:
 * Every level before the last is full (ie. levels with node-values {1} and {2, 3}), and all nodes in the last level ({4, 5, 6}) are as far left as possible.
 *
 * Example 2:
 * Input: [1,2,3,4,5,null,7]
 * Output: false
 * Explanation: The node with value 7 isn't as far left as possible.
 *
 * Note:
 * The tree will have between 1 and 100 nodes.
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
    public bool IsCompleteTree(TreeNode root) {
        if (root == null) return true;

        Queue<TreeNode> q = new Queue<TreeNode>();
        q.Enqueue(root);
        int layerCount = 1;

        while (q.Count > 0) {
            int len = q.Count;
            int total = q.Count;
            bool shouldLeaf = false;

            while (len > 0) {
                TreeNode node = q.Dequeue();
                if (node.left == null && node.right != null) return false;
                if ((node.left != null || node.right != null) && shouldLeaf) return false;
                if (node.right == null) shouldLeaf = true;

                if (node.left != null) q.Enqueue(node.left);
                if (node.right != null) q.Enqueue(node.right);
                len -= 1;
            }
            if (q.Count > 0 && layerCount != total) return false;
            layerCount *= 2;
        }
        return true;
    }
}