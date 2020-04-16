/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。
 *
 * 示例1:
 * 输入：[1, 2, 3, 3, 2, 1]
 * 输出：[1, 2, 3]
 *
 * 示例2:
 * 输入：[1, 1, 1, 1, 2]
 * 输出：[1, 2]
 *
 * 提示：
 * 链表长度在[0, 20000]范围内。
 * 链表元素在[0, 20000]范围内。
 *
 * 进阶：
 * 如果不得使用临时缓冲区，该怎么解决？
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
    public ListNode RemoveDuplicateNodes(ListNode head) {
        if (head == null) return head;

        ListNode pre = head;
        ListNode node = pre.next;
        HashSet<int> set = new HashSet<int>();
        set.Add(pre.val);
        while (node != null) {
            if (set.Contains(node.val)) {
                pre.next = node.next;
            } else {
                set.Add(node.val);
                pre = pre.next;
            }
            node = node.next;
        }
        return head;
    }
}