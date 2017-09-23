/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a linked list, determine if it has a cycle in it.
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
 * @return {boolean}
 */
var hasCycle = function(head) {
  var set = new Set();
  var result = false;
  while(head && head.next) {
    if (set.has(head)) {
      result = true;
      break;
    }
    set.add(head);
    head = head.next;
  }
  return result;
};
