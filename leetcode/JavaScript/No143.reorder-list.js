/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a singly linked list L: L0 ->L1 -> … -> Ln-1 -> Ln,
 * reorder it to: L0 -> Ln -> L1 -> Ln-1 -> L2 -> Ln-2 -> …
 * You must do this in-place without altering the nodes' values.
 *
 * Example:
 * Given {1,2,3,4}, reorder it to {1,4,2,3}.
 *
 * 原地修改链表，使得链表的后半部分以反转的顺序插入到前半部分中
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (head && head.next && head.next.next) {
    var arr = [];
    var node = head;

    while (node) {
      arr.push(node);
      node = node.next;
    }
    var length = arr.length;
    var index = length - 1;
    var center = Math.ceil(length / 2);

    node = head;
    while (index >= center) {
      var n = arr[index];
      var next = node.next;
      node.next = n;
      n.next = next;
      node = next;
      index -= 1;
    }
    node.next = null;
  }
};
