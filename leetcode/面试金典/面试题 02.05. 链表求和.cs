/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 给定两个用链表表示的整数，每个节点包含一个数位。
 * 这些数位是反向存放的，也就是个位排在链表首部。
 * 编写函数对这两个整数求和，并用链表形式返回结果。
 *
 * 示例：
 * 输入：(7 -> 1 -> 6) + (5 -> 9 -> 2)，即617 + 295
 * 输出：2 -> 1 -> 9，即912
 *
 * 进阶：假设这些数位是正向存放的，请再做一遍。
 *
 * 示例：
 * 输入：(6 -> 1 -> 7) + (2 -> 9 -> 5)，即617 + 295
 * 输出：9 -> 1 -> 2，即912
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
        int remain = 0;
        ListNode res = new ListNode(0);
        ListNode cur = res;

        while (l1 != null || l2 != null) {
            int num = (l1 == null ? 0 : l1.val) + (l2 == null ? 0 : l2.val) + remain;
            cur.next = new ListNode(num % 10);
            remain = num >= 10 ? 1 : 0;
            cur = cur.next;
            if (l1 != null) l1 = l1.next;
            if (l2 != null) l2 = l2.next;
        }

        if (remain > 0) cur.next = new ListNode(1);
        return res.next;
    }
}
