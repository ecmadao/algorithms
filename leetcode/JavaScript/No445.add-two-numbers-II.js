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
  const nums1 = []
  const nums2 = []

  while (l1 || l2) {
    if (l1) {
      nums1.push(l1.val)
      l1 = l1.next
    }
    if (l2) {
      nums2.push(l2.val)
      l2 = l2.next
    }
  }

  let remain = 0
  let head = null
  while (nums1.length || nums2.length) {
    const sum = (nums1.length ? nums1.pop() : 0) + (nums2.length ? nums2.pop() : 0) + remain
    const val = sum % 10
    remain = sum >= 10 ? 1 : 0

    const node = new ListNode(val)
    node.next = head
    head = node
  }

  if (remain) {
    const node = new ListNode(remain)
    node.next = head
    head = node
  }
  return head
}
