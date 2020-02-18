/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Write a program to find the node at which the intersection of two singly linked lists begins.
 *
 * Example:
 * the following two linked lists:
 * A:       a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗
 * B:  b1 → b2 → b3
 * begin to intersect at node c1.
 *
 * Notes:
 * If the two linked lists have no intersection at all, return null.
 * The linked lists must retain their original structure after the function returns.
 * You may assume there are no cycles anywhere in the entire linked structure.
 * Your code should preferably run in O(n) time and use only O(1) memory.
 *
 * 给定两个（单向）链表，判定它们是否相交并返回交点。
 * 请注意相交的定义基于节点的引用，而不是基于节点的值。
 * 换句话说，如果一个链表的第k个节点与另一个链表的第j个节点是同一节点（引用完全相同），则这两个链表相交。
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
var getIntersectionNode_1 = function(headA, headB) {
  const set = new Set()

  while (headA || headB) {
    if (headA) {
      if (set.has(headA)) return headA
      set.add(headA)
      headA = headA.next
    }
    if (headB) {
      if (set.has(headB)) return headB
      set.add(headB)
      headB = headB.next
    }
  }
  return null
}

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
 *
 * 思路：
 * A、B 链接无所谓各自长度多少，只需两个指针 nodeA 和 nodeB，以一样的速度，走 A + B 的距离，则会同时在终点处结束。
 * 如果 A、B 有交点，则因为在交点后距离一直，则两指针会在交点处相遇；
 * 否则，两指针只能在链表末端相遇
 * https://leetcode-cn.com/problems/intersection-of-two-linked-lists/solution/xiang-jiao-lian-biao-by-leetcode/
 */
var getIntersectionNode_2 = function(headA, headB) {
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
