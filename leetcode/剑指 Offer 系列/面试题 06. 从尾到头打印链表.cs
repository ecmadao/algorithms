/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 *
 * 示例 1：
 * 输入：head = [1,3,2]
 * 输出：[2,3,1]
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
    public int[] ReversePrint(ListNode head) {
        Stack<int> res = new Stack<int>();
        while (head != null) {
            res.Push(head.val);
            head = head.next;
        }
        return res.ToArray();
    }
}