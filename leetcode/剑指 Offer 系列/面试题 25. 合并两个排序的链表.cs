/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
 *
 * 示例1：
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
 * 限制：
 * 0 <= 链表长度 <= 1000
 * 注意：本题与主站 21 题相同：https://leetcode-cn.com/problems/merge-two-sorted-lists/
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
    public ListNode MergeTwoLists(ListNode l1, ListNode l2) {
        ListNode res = new ListNode(0);
        ListNode head = res;
        while (l1 != null || l2 != null) {
            int n1 = l1 == null ? int.MaxValue : l1.val;
            int n2 = l2 == null ? int.MaxValue : l2.val;

            int cur;
            if (n1 <= n2) {
                cur = n1;
                l1 = l1.next;
            } else {
                cur = n2;
                l2 = l2.next;
            }
            head.next = new ListNode(cur);
            head = head.next;
        }
        return res.next;
    }
}