/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given the root of a binary tree, each node in the tree has a distinct value.
 * After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).
 * Return the roots of the trees in the remaining forest.  You may return the result in any order.
 *
 * Example 1:
 * Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
 * Output: [[1,2,null,4],[6],[7]]
 *
 * Constraints:
 * The number of nodes in the given tree is at most 1000.
 * Each node has a distinct value between 1 and 1000.
 * to_delete.length <= 1000
 * to_delete contains distinct values between 1 and 1000.
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
    public IList<TreeNode> DelNodes(TreeNode root, int[] to_delete) {
        List<TreeNode> res = new List<TreeNode>();
        HashSet<int> set = new HashSet<int>(to_delete);
        if (root == null) return res;
        if (set.Contains(root.val)) {
            set.Remove(root.val);
            res.AddRange(DelNodes(root.left, set.ToArray()));
            res.AddRange(DelNodes(root.right, set.ToArray()));
            return res;
        }

        res.Add(root);
        Queue<TreeNode> q = new Queue<TreeNode>();
        q.Enqueue(root);

        while (q.Count > 0) {
            TreeNode node = q.Dequeue();
            if (node.left != null) {
                if (set.Contains(node.left.val)) {
                    set.Remove(node.left.val);
                    TreeNode left = node.left;
                    node.left = null;
                    res.AddRange(DelNodes(left.left, set.ToArray()));
                    res.AddRange(DelNodes(left.right, set.ToArray()));
                } else {
                    q.Enqueue(node.left);
                }
            }
            if (node.right != null) {
                if (set.Contains(node.right.val)) {
                    set.Remove(node.right.val);
                    TreeNode right = node.right;
                    node.right = null;
                    res.AddRange(DelNodes(right.left, set.ToArray()));
                    res.AddRange(DelNodes(right.right, set.ToArray()));
                } else {
                    q.Enqueue(node.right);
                }
            }
        }

        return res;
    }
}