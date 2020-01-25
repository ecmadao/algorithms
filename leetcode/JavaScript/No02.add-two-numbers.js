/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 *
 * Example:
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 *
 * 简而言之，就是将数字作为链表储存起来，并且是倒序储存。比如 123 储存为 3 -> 2 -> 1
 * 现在两个数字相加，求其和的链表（用数组表示）
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const result = new ListNode()
  let head = result
  let remain = 0

  while (l1 || l2) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + remain
    const val = sum % 10
    remain = sum >= 10 ? 1 : 0

    head.next = new ListNode(val)
    head = head.next

    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  }

  if (remain) head.next = new ListNode(remain)

  return result.next
}
