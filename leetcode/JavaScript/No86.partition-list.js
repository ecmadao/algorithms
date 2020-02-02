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
  if (!head || !head.next) return head

  const result = new ListNode(null)
  result.next = head
  let p1 = result
  let previous = p1
  let p2 = p1.next

  while (p2) {
    const next = p2.next

    if (p2.val < x) {
      previous.next = next
      p2.next = p1.next
      p1.next = p2
      p1 = p1.next

      if (previous.val === null || previous.val < x) previous = p1
    } else {
      previous = p2
    }
    p2 = next
  }

  return result.next
}
