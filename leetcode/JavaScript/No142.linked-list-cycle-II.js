/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
 *
 * Note:
 * Do not modify the linked list.
 * Follow up:
 * Can you solve it without using extra space?
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
var detectCycle = function(head) {
  var set = new Set();
  var result = null;
  while(head && head.next) {
    if (set.has(head)) {
      result = head;
      break;
    }
    set.add(head);
    head = head.next;
  }
  return result;
};
