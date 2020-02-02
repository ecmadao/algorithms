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
  if (!head || !head.next || !head.next.next) return

  const queue = []
  let slow = head
  let fast = head

  // 寻找中间点，同时把前半段链表入队列
  while (fast && fast.next && fast.next.next) {
    fast = fast.next.next
    queue.push(slow)
    slow = slow.next
  }

  let point = slow.next
  let pre = slow.next
  if (fast.next) {
    queue.push(slow)
  } else {
    pre = slow
  }

  while (queue.length) {
    const node = queue.pop()
    const next = point.next

    point.next = node.next
    node.next = point
    pre.next = next

    point = next
  }
}
