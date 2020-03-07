/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null
 *
 * 同：https://leetcode-cn.com/problems/copy-list-with-random-pointer/
 */

/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) return null

  let node = head
  while (node) {
    const newNode = new Node(node.val, node.next, null)
    node.next = newNode
    node = newNode.next
  }

  node = head
  while (node && node.next) {
    if (node.random) node.next.random = node.random.next
    node = node.next.next
  }

  node = head
  const result = node.next
  while (node && node.next) {
    const next = node.next
    node.next = next.next
    node = next
  }

  return result
}
