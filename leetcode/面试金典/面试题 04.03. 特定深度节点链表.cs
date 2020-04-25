/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 给定一棵二叉树，设计一个算法，创建含有某一深度上所有节点的链表（比如，若一棵树的深度为 D，则会创建出 D 个链表）。
 * 返回一个包含所有深度的链表的数组。
 *
 * 示例：
 * 输入：[1,2,3,4,5,null,7,8]
 *        1
 *       /  \ 
 *      2    3
 *     / \    \ 
 *    4   5    7
 *   /
 *  8
 * 输出：[[1],[2,3],[4,5,7],[8]]
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
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode[] ListOfDepth(TreeNode tree) {
        List<ListNode> res = new List<ListNode>();
        if (tree == null) return res.ToArray();
    
        Queue<TreeNode> q = new Queue<TreeNode>();
        q.Enqueue(tree);
        while (q.Count > 0) {
            int len = q.Count;
            ListNode head = new ListNode(0);
            ListNode cur = head;

            while (len > 0) {
                TreeNode node = q.Dequeue();
                cur.next = new ListNode(node.val);
                if (node.left != null) q.Enqueue(node.left);
                if (node.right != null) q.Enqueue(node.right);
                len -= 1;
                cur = cur.next;
            }
            res.Add(head.next);
        }
        return res.ToArray();
    }
}