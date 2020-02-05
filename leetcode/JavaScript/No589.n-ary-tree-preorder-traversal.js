/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an n-ary tree, return the preorder traversal of its nodes' values.
 * Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).
 *
 * Follow up:
 * Recursive solution is trivial, could you do it iteratively?
 *
 * Example 1:
 * Input: root = [1,null,3,2,4,null,5,6]
 * Output: [1,3,5,6,2,4]
 *
 * Example 2:
 * Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
 * Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]
 *
 * 给定一个 N 叉树，返回其节点值的前序遍历。使用遍历的形式完成
*/

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  if (!root) return []
  const queue = [root]
  const result = []

  while (queue.length) {
    const node = queue.pop()
    result.push(node.val)
    const children = node.children || []
    for (let i = children.length - 1; i >= 0 ; i -= 1) {
      queue.push(children[i])
    }
  }
  return result
}
