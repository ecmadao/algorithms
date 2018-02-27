/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
 * k is a positive integer and is less than or equal to the length of the linked list.
 * If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
 * You may not alter the values in the nodes, only nodes itself may be changed.
 * Only constant memory is allowed.
 *
 * Example:
 * Given this linked list: 1->2->3->4->5
 * For k = 2, you should return: 2->1->4->3->5
 * For k = 3, you should return: 3->2->1->4->5
 *
 * 依旧是反转链表，但是跟 24 题相比，反转的元素数目不确定，每 k 个链表段进行反转，小于 k 则不反转
 */

/*
 * 思路：
 * 将链表按照 k 的长度进行切片，每个链表片段都进行反转，最后再合并
 *
 * 例如：
 * list: 1->2->3->4->5, k: 3
 * 则分为 1->2->3 和 4->5
 * 反转为 3->2->1 和 4->5（小于 k 的链表段不反转）
 * 然后合并 3->2->1->4->5
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
 * 将一个链表完全反转
 * 遍历链表的元素，依次将每个元素放在头部成为新的 header
 */
var reverseList = function(list) {
  var node = list;
  if (!node) return node;

  var head = node;
  var pre = head;
  node = node.next;

  while(node) {
    var next = node.next;
    pre.next = next;
    var temp = head;
    head = node;
    head.next = temp;
    node = next;
  }

  return {
    head,
    tail: pre
  };
};

/**
* @param {ListNode} head
* @param {number} k
* @return {ListNode}
*/
var reverseKGroup = function(head, k) {
  if (k <= 1) return head;

  var header = head;
  var sortedHead = null;
  var sortedTail = null;

  while(header) {
    var tail = header.next;
    var index = 1;
    // 截取 k 长度的链表
    while(index < k - 1) {
      if (!tail) break;
      tail = tail.next;
      index += 1;
    }
    if (!tail) {
      if (sortedTail) {
        sortedTail.next = header;
      } else {
        sortedHead = head;
      }
      break;
    }

    var nextHeader = tail.next;
    tail.next = null;

    var reverseResult = reverseList(header);

    if (!sortedHead) {
      sortedHead = reverseResult.head;
      sortedTail = reverseResult.tail;
    } else {
      sortedTail.next = reverseResult.head;
      sortedTail = reverseResult.tail;
    }

    header = nextHeader;
    sortedTail.next = header;
  }

  return sortedHead;
};