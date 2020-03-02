/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Reverse a singly linked list.
 *
 * 反转一个单链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  let pre = null
  let node = head

  while (node) {
    const rawNext = node.next
    node.next = pre
    pre = node
    node = rawNext
  }

  return pre
}
