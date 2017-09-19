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
  var l = new ListNode(-999);
  var nextList = l;
  var upper = 0;

  while(l1 || l2) {
      var value1 = l1 ? l1.val : 0;
      var value2 = l2 ? l2.val : 0;

      var sum = value1 + value2 + upper;
      var val = sum % 10;
      upper = Math.floor(sum / 10);

      nextList.next = new ListNode(val);
      nextList = nextList.next;

      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
  }

  // 注意考虑最后进位的情况
  // 如果是 [5], [5]，则和为 10，即 0 -> 1
  if (upper > 0) {
      nextList.next = new ListNode(upper);
  }

  return l.next;
};
