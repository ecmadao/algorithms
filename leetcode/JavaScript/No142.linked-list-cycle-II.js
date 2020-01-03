/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
 *
 * Note:
 * Do not modify the linked list.
 * Follow up:
 * Can you solve it without using extra space?
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * 双指针法：
 * 初始化一个慢指针 slow = head，每次仅走一步，即 slow = slow.next
 * 初始化一个快指针 fast = head，每次走两步，即 fast = fast.next.next
 *
 * 假设有环，从 head 到环起点的距离为 a，环长度为 b
 * 则当快、慢指针同时走动，直至相遇时，设慢指针在环内走了 m 步，则
 * 慢指针总共走了 a + m 步，快指针走了 2 * (a + m)，且快指针多走的 a + m 是环 b 的整数倍。设为 x 倍，即
 * a + m = xb
 *
 * 此时再设起点 point，point 和 slow 每次都只走一步，即
 * point = point.next
 * slow = slow.next
 *
 * 当 point 走了 a 步的时候，慢指针在环内走了 m + a 步。
 * 由 a + m = xb 得 m + a = xb - a + a = xb，即换的整数倍。则此时慢指针回到环的起点
 * /

/**
 * @param {ListNode} head
 * @return {ListNode}
 * two-pointer 解法
 */
var detectCycle = function(head) {
  let slow = head
  let fast = head

  while (true && slow && fast) {
    slow = slow.next
    fast = fast.next
    if (!fast) return null
    fast = fast.next

    if (slow === fast) break
  }

  if (!slow || !fast) return null

  let point = head

  while (point !== slow && point && slow) {
    point = point.next
    slow = slow.next
  }
  return point
}

const head = new ListNode(1)
const point = new ListNode(2)
head.next = point
head.next.next = new ListNode(3)
head.next.next.next = point

console.log(
  detectCycle(head)
)
