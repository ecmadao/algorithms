/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a linked list, swap every two adjacent nodes and return its head.
 *
 * Example:
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 *
 * Note:
 * Your algorithm should use only constant space.
 * You may not modify the values in the list, only nodes itself can be changed.
 *
 * 反转给出的链表。不能修改节点的值
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  var node = head;
  if (!head) return head;
  var child = head.next;
  var parent = null;

  while(node && child) {
    if (!parent) {
        head = child;
    } else {
        parent.next = child;
    }
    var temp = child.next;
    child.next = node;
    node.next = temp;

    parent = node;
    node = temp;
    child = temp ? temp.next : null;
  }
  return head;
};