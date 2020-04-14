/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Follow up:
 * What if you cannot modify the input lists? In other words, reversing the lists is not allowed.
 *
 * Example:
 * Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 8 -> 0 -> 7
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
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
        Stack<int> q1 = new Stack<int>();
        Stack<int> q2 = new Stack<int>();

        while (l1 != null || l2 != null) {
            if (l1 != null) {
                q1.Push(l1.val);
                l1 = l1.next;
            }
            if (l2 != null) {
                q2.Push(l2.val);
                l2 = l2.next;
            }
        }

        ListNode res = null;
        int remain = 0;
        while (q1.Count > 0 || q2.Count > 0) {
            int num = (q1.Count > 0 ? q1.Pop() : 0) + (q2.Count > 0 ? q2.Pop() : 0) + remain;
            ListNode node = new ListNode(num % 10);
            node.next = res;
            res = node;
            remain = num >= 10 ? 1 : 0;
        }
        if (remain > 0) {
            ListNode node = new ListNode(1);
            node.next = res;
            res = node;
        }
        return res;
    }
}