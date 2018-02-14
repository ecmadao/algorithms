/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a singly linked list, determine if it is a palindrome.
 *
 * Follow up:
 * Could you do it in O(n) time and O(1) space?
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
var isPalindrome = function(head) {
  let node = head;
  let length = 0;
  while (node) {
    length += 1;
    node = node.next;
  }
  node = head;
  let index = 0;
  const tmp = {};
  const midIndex = (length - 1) / 2;
  while (node) {
    if (index <= midIndex) {
      tmp[index] = node.val;
    }
    if (index > midIndex && tmp[2 * midIndex - index] !== node.val) {
      return false;
    }
    index += 1;
    node = node.next;
  }
  return true;
};
