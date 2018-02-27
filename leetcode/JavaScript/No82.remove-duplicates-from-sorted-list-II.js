/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a sorted linked list, delete all nodes that have duplicate numbers,
 * leaving only distinct numbers from the original list.
 *
 * Example:
 * Given 1->2->3->3->4->4->5, return 1->2->5.
 * Given 1->1->1->2->3, return 2->3.
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
var deleteDuplicates = function(head) {
  if (!head || !head.next) return head;
  var start = null;
  var tmp = null;
  while (head) {
    var loop = false;
    while (head.next && head.val === head.next.val) {
      loop = true;
      head = head.next;
    }
    if (!loop) {
      if (!start) {
        start = head;
        tmp = start;
      } else {
        tmp.next = head;
        tmp = tmp.next;
      }
    }
    head = head.next;
  }
  if (tmp) tmp.next = null;
  return start;
};
