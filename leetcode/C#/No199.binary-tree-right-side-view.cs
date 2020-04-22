/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
 *
 * Example:
 * Input: [1,2,3,null,5,null,4]
 * Output: [1, 3, 4]
 * Explanation:
 *   1            <---
 * /   \
 * 2     3         <---
 * \     \
 *  5     4       <---
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
    public IList<int> RightSideView(TreeNode root) {
        if (root == null) return new int[0];

        Queue<TreeNode> queue = new Queue<TreeNode>();
        queue.Enqueue(root);
        List<int> res = new List<int>();

        while (queue.Count > 0) {
            int len = queue.Count;
            while (len > 0) {
                TreeNode node = queue.Dequeue();
                if (node.left != null) queue.Enqueue(node.left);
                if (node.right != null) queue.Enqueue(node.right);
                len -= 1;
                if (len == 0) res.Add(node.val);
            }
        }

        return res;
    }
}