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
 * 快慢双指针
 */
var hasCycle = function(head) {
  if (!head) return false

  let fast = head
  let slow = head
  while (fast && slow) {
    fast = fast.next
    if (!fast) return false
    fast = fast.next
    slow = slow.next
    if (fast === slow) return true
  }
  return false
}
