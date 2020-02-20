/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Sort a linked list using insertion sort.
 *
 * 用插入排序的方法给链表排序
 */

/**
 * 思路：
 * 按照插入排序的思路即可。
 * 按照顺序向后遍历，每次遇见乱序的节点，先将其从链表中去除，同时认为该节点之前的链表已经是顺序的，
 * 最后遍历之前的链表，将该节点插入到合适的位置
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var sort = function(head, node) {
  var current = head;
  var pre = null;
  while(current) {
    if (current.val > node.val) {
      if (!pre) {
        node.next = head;
        head = node;
      } else {
        pre.next = node;
        node.next = current;
      }
      break;
    }
    pre = current;
    current = current.next;
  }
  return head;
};

/**
* @param {ListNode} head
* @return {ListNode}
*/
var insertionSortList_1 = function(head) {
  if (!head || !head.next) return head;

  var current = head;
  var pre = null;
  while(current) {
    if (pre && current.val < pre.val) {
      var temp = current.next;
      pre.next = temp;
      head = sort(head, current);
      current = temp;
      continue;
    }
    pre = current;
    current = current.next;
  }
  return head;
};


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
var insertionSortList_2 = function(head) {
  if (!head || !head.next) return head

  let result = new ListNode(null)
  result.next = head

  let node = head
  while (node && node.next) {
    if (node.next.val < node.val) {
      const rawNext = node.next
      node.next = rawNext.next

      let cur = result
      while (cur && cur.next && cur.next.val < rawNext.val) cur = cur.next
      rawNext.next = cur.next
      cur.next = rawNext
    } else {
      node = node.next
    }
  }

  return result.next
}
