/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree root and a linked list with head as the first node. 
 * Return True if all the elements in the linked list starting from the head correspond to some downward path connected in the binary tree otherwise return False.
 * In this context downward path means a path that starts at some node and goes downwards.
 *
 * Example 1:
 * Input: head = [4,2,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
 * Output: true
 * Explanation: Nodes in blue form a subpath in the binary Tree.  
 *
 * Example 2:
 * Input: head = [1,4,2,6], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
 * Output: true
 *
 * Example 3:
 * Input: head = [1,4,2,6,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
 * Output: false
 * Explanation: There is no path in the binary tree that contains all the elements of the linked list from head.
 *
 * Constraints:
 * 1. 1 <= node.val <= 100 for each node in the linked list and binary tree.
 * 2. The given linked list will contain between 1 and 100 nodes.
 * 3. The given binary tree will contain between 1 and 2500 nodes.
*/

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) { val = x; }
 * }
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
    private bool dfs(ListNode cur, TreeNode node) {
        if (cur == null) return true;
        if (node == null) return false;
        if (cur.val != node.val) return false;
        return dfs(cur.next, node.left) || dfs(cur.next, node.right);
    }

    public bool IsSubPath(ListNode head, TreeNode root) {
        if (head == null) return true;
        if (root == null) return false;

        return dfs(head, root) || IsSubPath(head, root.left) || IsSubPath(head, root.right);
    }
}
