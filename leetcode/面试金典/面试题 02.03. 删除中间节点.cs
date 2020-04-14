/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 实现一种算法，删除单向链表中间的某个节点（除了第一个和最后一个节点，不一定是中间节点），假定你只能访问该节点。
 *
 * 示例：
 * 输入：单向链表a->b->c->d->e->f中的节点c
 * 结果：不返回任何数据，但该链表变为a->b->d->e->f
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
    public void DeleteNode(ListNode node) {
        ListNode pre = node;
        node = node.next;

        while (node.next != null) {
            pre.val = node.val;
            pre = pre.next;
            node = node.next;
        }
        pre.val = node.val;
        pre.next = null;
    }
}