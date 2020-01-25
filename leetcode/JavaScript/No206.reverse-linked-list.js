/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Reverse a singly linked list.
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
  let node = null

  while (head) {
    const tmp = new ListNode(head.val)

    tmp.next = node
    node = tmp
    head = head.next
  }
  return node
}
