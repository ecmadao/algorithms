/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
 * You should preserve the original relative order of the nodes in each of the two partitions.
 *
 * Example:
 * Given 1->4->3->2->5->2 and x = 3,
 * return 1->2->2->4->3->5.
 *
 * 把链表内数字按照指定数字左右分隔，小数放左边大数放右边
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
* @param {number} x
* @return {ListNode}
*/
var partition = function(head, x) {
  var lastSmall = null;
  var lastBig = null;
  var encounterSeparator = false;
  var node = head;
  while(node) {
    if (node.val < x) {
      if (!encounterSeparator) {
        lastSmall = node;
        node = node.next;
      } else {
        var next = node.next;
        var firstBig;
        if (lastSmall) {
          firstBig = lastSmall.next;
          lastSmall.next = node;
          node.next = firstBig;
          lastBig.next = next;
          lastSmall = node;
        } else {
          firstBig = head;
          head = node;
          head.next = firstBig;
          lastBig.next = next;
          lastSmall = head;
        }
        node = next;
      }
    } else {
      if (!encounterSeparator) {
        encounterSeparator = true;
      }
      lastBig = node;
      node = node.next;
    }
  }
  return head;
};
