/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Remove all elements from a linked list of integers that have value val.
 *
 * Example:
 * Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
 * Return: 1 --> 2 --> 3 --> 4 --> 5
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let result = head;
  let node = head;
  let pre = null;

  while (node !== null) {
    if (node.val === val) {
      if (pre === null) {
        result = node.next;
      } else {
        pre.next = node.next;
      }
    } else {
      pre = node;
    }
    node = node.next;
  }
  return result;
};
