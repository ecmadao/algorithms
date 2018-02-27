/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Sort a linked list in O(n log n) time using constant space complexity.
 *
 * 给一个链表按照从小到大的顺序排序
 */

/**
 * 相对于给数组排序，链表的最大问题在于我们无法通过索引快速的获取到链表中的某个节点
 * 因此，首先想到的就是 merge sort, 归并排序，每次只需要获取到链表的中间位置
 * 如何快速获取到链表的中间位置呢？
 * 可以创建一个 fast 索引，一个 slow 索引，然后两者向后遍历
 * 但每次 fast 索引向后走的步长是 slow 的两倍。因此，当 fast 到达链表的结尾处时，slow 正好处于中间位置
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var merge = function(list1, list2) {
  if (!list1 && list2) return null;
  var list = new ListNode(null);
  var current = list;

  while(list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2= list2.next;
    }
    current = current.next;
  }

  if (list1) {
    current.next = list1;
  } else if (list2) {
    current.next = list2;
  }
  return list.next;
};

/**
* @param {ListNode} head
* @return {ListNode}
*/
var sortList = function(head) {
  if (!head || !head.next) return head;
  var slow = head;
  var fast  =head;

  // 每次 fast 索引向后走的步长是 slow 的两倍。
  // 当 fast 到达链表的结尾处时，slow 正好处于中间位置
  while(fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  fast = slow.next;
  slow.next = null;

  return merge(sortList(head), sortList(fast));
};