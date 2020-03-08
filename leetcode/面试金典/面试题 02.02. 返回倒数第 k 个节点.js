/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。
 * 注意：本题相对原题稍作改动
 *
 * 示例：
 * 输入： 1->2->3->4->5 和 k = 2
 * 输出： 4
 *
 * 说明：
 * 给定的 k 保证是有效的。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function(head, k) {
  let slow = head
  let fast = head
  while (k) {
    fast = fast.next
    k -= 1
  }

  while (fast) {
    slow = slow.next
    fast = fast.next
  }
  return slow.val
}
