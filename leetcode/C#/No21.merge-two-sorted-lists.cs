/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Merge two sorted linked lists and return it as a new list.
 * The new list should be made by splicing together the nodes of the first two lists.
 *
 * Example:
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
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

            if (n1 >= n2) {
                head.next = new ListNode(n2);
                l2 = l2.next;
            } else {
                head.next = new ListNode(n1);
                l1 = l1.next;
            }
            head = head.next;
        }
        return res.next;
    }
}