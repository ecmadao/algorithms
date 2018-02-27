/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Reverse a linked list from position m to n. Do it in-place and in one-pass.
 *
 * Example:
 * Given 1->2->3->4->5->NULL, m = 2 and n = 4,
 * return 1->4->3->2->5->NULL.
 *
 * Note:
 * Given m, n satisfy the following condition:
 * 1 ≤ m ≤ n ≤ length of list.
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if (!head || !head.next || m >= n || n === 1) return head;
  var p = 1;
  var start = null;
  var node = head;
  var pre = null;
  var end = null;
  while(node && p <= n) {
    if (p === m - 1) start = node;
    var next = node.next;
    if (p >= m) {
      node.next = pre;
      pre = node;
      if (!end) end = pre;
      if (p === n) {
        end.next = next;
      }
    }
    node = next;
    p += 1;
  }
  if (!start) return pre;
  start.next = pre;
  return head;
};
