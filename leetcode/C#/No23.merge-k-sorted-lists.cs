/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
 *
 * Example:
 * Input:
 * [
 *  1->4->5,
 *  1->3->4,
 *  2->6
 * ]
 * Output: 1->1->2->3->4->4->5->6
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
    private ListNode Merge2List(ListNode n1, ListNode n2) {
        ListNode res = new ListNode(0);
        ListNode head = res;

        while (n1 != null && n2 != null) {
            if (n1.val <= n2.val) {
                head.next = new ListNode(n1.val);
                n1 = n1.next;
            } else {
                head.next = new ListNode(n2.val);
                n2 = n2.next;
            }
            head = head.next;
        }

        while (n1 != null) {
            head.next = new ListNode(n1.val);
            n1 = n1.next;
            head = head.next;
        }
        while (n2 != null) {
            head.next = new ListNode(n2.val);
            n2 = n2.next;
            head = head.next;
        }
        return res.next;
    }

    public ListNode MergeKLists(ListNode[] lists) {
        if (lists.Length <= 0) return null;
        ListNode res = lists[0];
        for (int i = 1; i < lists.Length; i += 1) {
            res = Merge2List(res, lists[i]);
        }
        return res;
    }
}