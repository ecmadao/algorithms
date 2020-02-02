/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * You are given a doubly linked list which in addition to the next and previous pointers,
 * it could have a child pointer, which may or may not point to a separate doubly linked list.
 * These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.
 *
 * Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.
 *
 * Example 1:
 * Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
 * Output: [1,2,3,7,8,11,12,9,10,4,5,6]
 *
 * Example 2:
 * Input: head = [1,2,null,3]
 * Output: [1,3,2]
 * Explanation:
 * The input multilevel linked list is as follows:
 * 1---2---NULL
 * |
 * 3---NULL
 *
 * Example3:
 * Input: head = []
 * Output: []
 *
 * 获得一个双向链表，除了下一个和前一个指针之外，它还有一个子指针，可能指向单独的双向链表。这些子列表可能有一个或多个自己的子项，依此类推，生成多级数据结构，如下面的示例所示。
 * 扁平化列表，使所有结点出现在单级双链表中。返回列表第一级的头部。
 */

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  if (!head) return null

  const queue = [head]
  const result = new Node(null)
  let current = result

  while (queue.length) {
    const node = queue.pop()

    current.next = new Node(node.val)
    current.next.prev = current.val === null ? null : current
    current = current.next

    if (node.next) queue.push(node.next)
    if (node.child) queue.push(node.child)
  }

  return result.next
}
