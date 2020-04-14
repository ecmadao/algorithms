/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 编写一个函数，检查输入的链表是否是回文的。
 *
 * 示例 1：
 * 输入： 1->2
 * 输出： false 
 *
 * 示例 2：
 * 输入： 1->2->2->1
 * 输出： true 
 *
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
    public bool IsPalindrome(ListNode head) {
        if (head == null) return true;

        ListNode slow = head;
        ListNode fast = head;
        ListNode pre = null;

        while (fast != null && fast.next != null) {
            fast = fast.next.next;

            ListNode next = slow.next;
            slow.next = pre;
            pre = slow;
            slow = next;
        }

        ListNode n1 = pre;
        ListNode n2 = fast == null ? slow : slow.next;

        while (n2 != null && n2 != null) {
            if (n1.val != n2.val) return false;
            n1 = n1.next;
            n2 = n2.next;
        }
        return n1 == null && n2 == null;
    }
}