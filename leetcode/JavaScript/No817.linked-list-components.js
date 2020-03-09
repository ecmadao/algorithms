/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * We are given head, the head node of a linked list containing unique integer values.
 * We are also given the list G, a subset of the values in the linked list.
 * Return the number of connected components in G, where two values are connected if they appear consecutively in the linked list.
 *
 * Example 1:
 * Input:
 * head: 0->1->2->3
 * G = [0, 1, 3]
 * Output: 2
 * Explanation:
 * 0 and 1 are connected, so [0, 1] and [3] are the two connected components.
 *
 * Example 2:
 * Input:
 * head: 0->1->2->3->4
 * G = [0, 3, 1, 4]
 * Output: 2
 * Explanation:
 * 0 and 1 are connected, 3 and 4 are connected, so [0, 1] and [3, 4] are the two connected components.
 *
 * Note:
 * 1. If N is the length of the linked list given by head, 1 <= N <= 10000.
 * 2. The value of each node in the linked list will be in the range [0, N - 1].
 * 3. 1 <= G.length <= 10000.
 * 4. G is a subset of all values in the linked list.
 *
 * 给定一个链表（链表结点包含一个整型值）的头结点 head。
 * 同时给定列表 G，该列表是上述链表中整型值的一个子集。
 * 返回列表 G 中组件的个数，这里对组件的定义为：链表中一段最长连续结点的值（该值必须在列表 G 中）构成的集合
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
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function(head, G) {
  let count = 0
  const set = new Set(G)

  let pre = null
  let node = head
  while (node) {
    if (
      set.has(node.val) &&
      (!pre || !set.has(pre.val))
    ) count += 1

    pre = node
    node = node.next
  }
  return count
}
