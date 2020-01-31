/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a linked list, remove the nth node from the end of list and return its head.
 *
 * Example:
 * Given linked list: 1->2->3->4->5, and n = 2.
 * After removing the second node from the end, the linked list becomes 1->2->3->5.
 *
 * Note:
 * Given n will always be valid.
 * Try to do this in one pass.
 *
 * 给出一个链表，删除倒数第 n 位的元素
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
 * 思路：
 * 因为是链表，所以我们不知道其长度，如果直接遍历，过程中也不知道是否到达了倒数第 n 位元素
 * 为了减少遍历次数，可以创建两个链表指针，初始化都指向头部
 * 然后其中一个指针（B）向后遍历，使其位置超出另一个指针（A）n + 1 位，此时 A、B 之间位置相差 n（A 位于第 1 位，B 位于第 n + 1 位）
 * 然后两者同时向后遍历，直到 B 超出范围。此时 A 与链表末尾相差 n 位，即要删除的元素
 */

/**
* @param {ListNode} head
* @param {number} n
* @return {ListNode}
*/
var removeNthFromEnd = function(head, n) {
  let n1 = head
  let n2 = head
  let count = 1
  let i = n

  while (n && n2 && n2.next) {
    n2 = n2.next
    n -= 1
    count += 1
  }

  while (n2 && n2.next) {
    n2 = n2.next
    n1 = n1.next
    count += 1
  }

  if (count === i) return n1.next
  n1.next = n1.next.next
  return head
}
