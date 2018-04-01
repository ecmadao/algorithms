/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Write a function to delete a node (except the tail) in a singly linked list,
 * given only access to that node.
 * Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3,
 * the linked list should become 1 -> 2 -> 4 after calling your function.
 *
 * 乍一看是个莫名其妙的题目，其实换一下思路还蛮有意思的。。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  while (node !== null && node.next !== null && node.next.next !== null) {
    node.val = node.next.val;
    node = node.next;
  }
  node.val = node.next.val;
  node.next = null;
};