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
  if (!head || !head.next) return head;
  var node = null;
  while (head) {
    var tmp = new ListNode(head.val);
    tmp.next = node;
    node = tmp;
    head = head.next;
  }
  return node;
};