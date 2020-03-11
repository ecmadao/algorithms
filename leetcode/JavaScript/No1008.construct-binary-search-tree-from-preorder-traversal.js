/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Return the root node of a binary search tree that matches the given preorder traversal.
 * (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.
 * Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)
 *
 * Example 1:
 * Input: [8,5,1,7,10,12]
 * Output: [8,5,10,1,7,null,12]
 *
 * Note:
 * 1. 1 <= preorder.length <= 100
 * 2. The values of preorder are distinct.
 *
 * 返回与给定先序遍历 preorder 相匹配的二叉搜索树（binary search tree）的根结点。
 * (回想一下，二叉搜索树是二叉树的一种，其每个节点都满足以下规则，对于 node.left 的任何后代，值总 < node.val，而 node.right 的任何后代，值总 > node.val。
 * 此外，先序遍历首先显示节点的值，然后遍历 node.left，接着遍历 node.right。）
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  if (!preorder.length) return null

  let root = preorder.shift()
  let node = new TreeNode(root)
  const queue = [node]

  while (preorder.length && preorder[0] < root) {
    root = preorder.shift()
    node.left = new TreeNode(root)
    node = node.left
    queue.push(node)
  }

  while (queue.length) {
    node = queue.pop()
    node.right = bstFromPreorder(
      preorder.filter(num => num > node.val && (
        queue.length ? num < queue.slice(-1)[0].val : true
      ))
    )
  }

  return node
}
