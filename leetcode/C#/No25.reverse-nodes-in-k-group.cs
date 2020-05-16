/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
 * k is a positive integer and is less than or equal to the length of the linked list.
 * If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
 *
 * Example:
 * Given this linked list: 1->2->3->4->5
 * For k = 2, you should return: 2->1->4->3->5
 * For k = 3, you should return: 3->2->1->4->5
 *
 * Note:
 * Only constant extra memory is allowed.
 * You may not alter the values in the list's nodes, only nodes itself may be changed.
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
    public ListNode ReverseKGroup(ListNode head, int k) {
        ListNode node = head;
        ListNode res = new ListNode(0);
        ListNode pre = res;

        while (node != null) {
            int n = k;
            ListNode cur = node;
            ListNode tmp = null;

            while (node != null && n > 0) {
                n -= 1;
                ListNode next = node.next;
                node.next = tmp;
                tmp = node;
                node = next;
            }

            if (n > 0) {
                ListNode preTmp = null;
                while (tmp != null && n < k) {
                    n += 1;
                    ListNode next = tmp.next;
                    tmp.next = preTmp;
                    preTmp = tmp;
                    tmp = next;
                }
                pre.next = preTmp;
            } else {
                pre.next = tmp;
                pre = cur;
            }
        }

        return res.next;
    }
}