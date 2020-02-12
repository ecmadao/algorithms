/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a singly linked list, determine if it is a palindrome.
 *
 * Follow up:
 * Could you do it in O(n) time and O(1) space?
 *
 * 请判断一个链表是否为回文链表
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
var isPalindrome_1 = function(head) {
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
 *
 * 快慢指针
 */
var isPalindrome_2 = function(head) {
  if (!head) return true

  let fast = head
  let slow = head

  while (fast) {
    slow = slow.next
    fast = fast.next
    if (fast) fast = fast.next
  }

  fast = slow
  slow = head
  const arr1 = []
  const arr2 = []

  while (fast) {
    arr1.push(slow.val)
    slow = slow.next
    arr2.push(fast.val)
    fast = fast.next
  }
  return arr1.join('') === arr2.reverse().join('')
}
