/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。
 *
 * 例如:
 * 给定二叉树: [3,9,20,null,null,15,7],
 *    3
 *   / \
 *  9  20
 *    /  \
 *   15   7
 * 返回其层次遍历结果：
 * [
 *  [3],
 *  [20,9],
 *  [15,7]
 * ]
 *
 * 提示：
 * 节点总数 <= 1000
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
    public IList<IList<int>> LevelOrder(TreeNode root) {
        IList<IList<int>> res = new List<IList<int>>();
        if (root == null) return res;

        Queue<TreeNode> q = new Queue<TreeNode>();
        q.Enqueue(root);
        while (q.Count > 0) {
            int len = q.Count;
            IList<int> list = new List<int>();

            while (len > 0) {
                TreeNode node = q.Dequeue();
                list.Add(node.val);
                if (node.left != null) q.Enqueue(node.left);
                if (node.right != null) q.Enqueue(node.right);
                len -= 1;
            }
            int[] nums = list.ToArray();
            if (res.Count % 2 == 1) Array.Reverse(nums);
            res.Add(new List<int>(nums));
        }
        return res;
    }
}