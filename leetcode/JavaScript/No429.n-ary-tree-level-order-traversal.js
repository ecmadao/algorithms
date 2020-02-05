/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an n-ary tree, return the level order traversal of its nodes' values.
 * Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).
 *
 * Example 1:
 * Input: root = [1,null,3,2,4,null,5,6]
 * Output: [[1],[3,2,4],[5,6]]
 *
 * Example 2:
 * Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
 * Output: [[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]
 *
 * Constraints:
 * 1. The height of the n-ary tree is less than or equal to 1000
 * 2. The total number of nodes is between [0, 10^4]
 *
 * 给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const result = []
  if (!root) return result

  const queue = [root]
  while (queue.length) {
    const count = queue.length

    let level = []
    for (let i = 1; i <= count; i += 1) {
      const node = queue.shift()
      level.push(node.val)
      queue.push(...node.children)
    }
    result.push(level)
  }
  return result
}
