/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Convert a Binary Search Tree to a sorted Circular Doubly-Linked List in place.
 * You can think of the left and right pointers as synonymous to the predecessor and successor pointers in a doubly-linked list.
 * For a circular doubly linked list, the predecessor of the first element is the last element, and the successor of the last element is the first element.
 *
 * We want to do the transformation in place. After the transformation,
 * the left pointer of the tree node should point to its predecessor,
 * and the right pointer should point to its successor.
 * You should return the pointer to the smallest element of the linked list.
 *
 * Example 1:
 * Input: root = [4, 2, 5, 1, 3]
 * Output: [1, 2, 3, 4, 5]
 * Explanation:
 * The figure below shows the transformed BST.
 * The solid line indicates the successor relationship, while the dashed line means the predecessor relationship.
 *
 * Example 2:
 * Input: root = [2,1,3]
 * Output: [1,2,3]
 *
 * Example 3:
 * Input: root = []
 * Output: []
 * Explanation: Input is an empty tree. Output is also an empty Linked List.
 *
 * Example 4:
 * Input: root = [1]
 * Output: [1]
 *
 * Constraints:
 * 1. -1000 <= Node.val <= 1000
 * 2. Node.left.val < Node.val < Node.right.val
 * 3. All values of Node.val are unique.
 * 4. 0 <= Number of Nodes <= 2000
 *
 * 将一个二叉搜索树就地转化为一个已排序的双向循环链表。可以将左右孩子指针作为双向循环链表的前驱和后继指针
 */

/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */
/**
 * @param {Node} root
 * @return {Node}
 *
 * 中序遍历
 */
var treeToDoublyList = function(root) {
  if (!root) return null
  let node = root
  const queue = []

  let result = null
  let pre = null

  while (node || queue.length) {
    if (node) {
      queue.push(node)
      node = node.left
    } else {
      node = queue.pop()
      if (!result) {
        result = node
        pre = node
      } else {
        pre.right = node
        node.left = pre
        pre = node
      }
      node = node.right
    }
  }

  pre.right = result
  result.left = pre
  return result
}
