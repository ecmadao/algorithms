/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * You are given two non-empty linked lists representing two non-negative integers.
 * The most significant digit comes first and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.You may assume the two numbers do not contain any leading zero,
 * except the number 0 itself.
 *
 * Example:
 * Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 8 -> 0 -> 7
 *
 * 求两个代表数字的反转的链表相加的结果
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
  var nums1 = [];
  var nums2 = [];

  while(l1 || l2) {
    if (l1) {
      nums1.unshift(l1.val);
      l1 = l1.next;
    }
    if (l2) {
      nums2.unshift(l2.val);
      l2 = l2.next;
    }
  }

  var head = null;
  var remainder = 0;
  while (nums1.length || nums2.length) {
    var number1 = nums1.length ? nums1.shift() : 0;
    var number2 = nums2.length ? nums2.shift() : 0;
    var number = remainder + number1 + number2;
    if (number >= 10) {
      remainder = 1;
      number -= 10;
    } else {
      remainder = 0;
    }
    var node = new ListNode(number);
    if (!head) {
      head = node;
    } else {
      node.next = head;
      head = node;
    }
  }
  if (remainder) {
    var result = new ListNode(remainder);
    result.next = head;
    head = result;
  }

  return head;
};
