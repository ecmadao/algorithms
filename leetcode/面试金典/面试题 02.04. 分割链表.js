/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 编写程序以 x 为基准分割链表，使得所有小于 x 的节点排在大于或等于 x 的 节点之前。如果链表中包含 x，x 只需出现在小于 x 的元素之前(如下所示)。分割元素 x 只需处于“右半部分”即可，其不需要被置于左右两部分之间
 *
 * 示例:
 * 输入: head = 3->5->8->5->10->2->1, x = 5
 * 输出: 3->1->2->10->5->5->8
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
