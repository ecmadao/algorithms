/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a list, rotate the list to the right by k places, where k is non-negative.
 *
 * Example:
 * Given 1->2->3->4->5->NULL and k = 2,
 * return 4->5->1->2->3->NULL.
 *
 * 给一个链表和 k，把倒数第 k 个节点和其之后的链表移到原链表的头部
 */

/**
 * 思路：
 * 没有什么意思的题目，主要考察的是快速定位到链表的第 n 个元素。可以通过双索引来解决
 * 该题需要注意的是 k 的取值问题：
 * k === 0 || k === list length: 直接返回 head
 * k > list length: k = k % list length
 *
 * Given [0,1,2], rotate 1 steps to the right -> [2,0,1].
 * Given [0,1,2], rotate 2 steps to the right -> [1,2,0].
 * Given [0,1,2], rotate 3 steps to the right -> [0,1,2].
 * Given [0,1,2], rotate 4 steps to the right -> [2,0,1].
 * So, no matter how big K, the number of steps is, the result is always the same as rotating K % n steps to the right.
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head || !head.next || k === 0) return head;

  var tmp = head;
  var length = 1;
  while (tmp.next) {
    length += 1;
    tmp = tmp.next;
  }
  if (k === length) return head;
  k = k % length;
  if (k === 0) return head;

  var slow = 1;
  var quick = 1;
  var node = head;
  var slowPre = null;
  var slowNode = head;
  while(node.next) {
    if (quick - slow < k - 1) {
      quick += 1;
    } else {
      quick += 1;
      slow += 1;
      slowPre = slowNode;
      slowNode = slowNode.next;
    }
    node = node.next;
  }
  slowPre.next = null;
  node.next = head;
  return slowNode;
};