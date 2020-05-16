/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。
 * 从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。
 *
 * 示例:
 * 给定如下二叉树，以及目标和 sum = 22，
 *              5
 *             / \
 *            4   8
 *           /   / \
 *          11  13  4
 *         /  \    / \
 *        7    2  5   1
 * 返回:
 * [
 *   [5,4,11,2],
 *   [5,8,4,5]
 * ]
 *
 * 提示：
 * 节点总数 <= 10000
 * 注意：本题与主站 113 题相同：https://leetcode-cn.com/problems/path-sum-ii/
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
    public IList<IList<int>> PathSum(TreeNode root, int sum) {
        List<IList<int>> res = new List<IList<int>>();
        void dfs(TreeNode node, int prefix, List<int> path) {
            if (node == null) return;
            prefix += node.val;

            path.Add(node.val);
            if (node.left == null && node.right == null) {
                if (prefix == sum) res.Add(new List<int>(path));
            }

            dfs(node.left, prefix, path);
            dfs(node.right, prefix, path);
            path.RemoveAt(path.Count - 1);
        }

        dfs(root, 0, new List<int>());

        return res;
    }
}