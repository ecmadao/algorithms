/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree where all the right nodes are either leaf nodes with a sibling (a left node that shares the same parent node) or empty,
 * flip it upside down and turn it into a tree where the original right nodes turned into left leaf nodes. Return the new root.
 *
 * Example:
 * Input: [1,2,3,4,5]
        1
       / \
      2   3
     / \
    4   5
 *
 * Output: return the root of the binary tree [4,5,2,#,#,3,1]
       4
      / \
     5   2
        / \
       3   1
 *
 * 给定一个二叉树，其中所有的右节点要么是具有兄弟节点（拥有相同父节点的左节点）的叶节点，要么为空，将此二叉树上下翻转并将它变成一棵树， 原来的右节点将转换成左叶节点。返回新的根
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var upsideDownBinaryTree_1 = function(root) {
  if (!root) return null

  let node = root
  const queue = []
  while (node) {
    queue.push(node)
    node = node.left
  }

  let head = null
  let cur = null
  while (queue.length) {
    node = queue.pop()
    if (!head) {
      head = new TreeNode(node.val)
      cur = head
    } else {
      cur.right = new TreeNode(node.val)
      cur.left = node.right
      cur = cur.right
    }
  }
  return head
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var upsideDownBinaryTree_2 = function(root) {
  if (!root) return null

  let parent = null
  let parentRight = null
  while (root) {
    const rootLeft = root.left
    root.left = parentRight
    parentRight = root.right
    root.right = parent
    parent = root
    root = rootLeft
  }

  return parent
}
