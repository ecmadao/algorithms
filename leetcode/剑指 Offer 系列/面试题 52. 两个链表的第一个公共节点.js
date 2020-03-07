/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 输入两个链表，找出它们的第一个公共节点
 *
 * 同：https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null

  let nodeA = headA
  let nodeB = headB

  while (nodeA || nodeB) {
    if (nodeA === nodeB) return nodeA

    if (!nodeA.next && !nodeB.next) return null
    nodeA = nodeA.next ? nodeA.next : headB
    nodeB = nodeB.next ? nodeB.next : headA
  }
}
