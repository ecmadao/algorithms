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
var partition_1 = function(head, x) {
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
var partition_2 = function(head, x) {
  if (!head) return null
  let result = new ListNode(null)
  result.next = head
  let point1 = result
  let point2 = result

  while (point2 && point2.next) {
    while (point2 && point2.next && point2.next.val >= x) point2 = point2.next
    if (!point2.next) break

    const small = point2.next
    point2.next = small.next

    const rawNext = point1.next
    point1.next = small
    small.next = rawNext

    if (point2 === point1) point2 = point2.next
    point1 = point1.next
  }

  return result.next
}
