/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree, write a function to get the maximum width of the given tree.
 * The width of a tree is the maximum width among all levels.
 * The binary tree has the same structure as a full binary tree, but some nodes are null.
 * The width of one level is defined as the length between the end-nodes
 * (the leftmost and right most non-null nodes in the level, where the null nodes between the end-nodes are also counted into the length calculation.)
 *
 * Example1:
 * Input:
 *
          1
        /   \
       3     2
      / \     \
    5   3     9
 *
 * Output: 4
 * Explanation: The maximum width existing in the third level with the length 4 (5,3,null,9).
 *
 * Example2:
 * Input:

          1
         /
        3
       / \
      5   3
 *
 * Output: 2
 * Explanation: The maximum width existing in the third level with the length 2 (5,3).
 *
 * Example3:
 * Input:

          1
         / \
        3   2
       /
      5
 *
 * Output: 2
 * Explanation: The maximum width existing in the second level with the length 2 (3,2).
 *
 * Example4:
 * Input:

          1
         / \
        3   2
       /     \
      5       9
     /         \
    6           7
 *
 * Output: 8
 * Explanation:The maximum width existing in the fourth level with the length 8 (6,null,null,null,null,null,null,7).
 *
 * 给定一个二叉树，编写一个函数来获取这个树的最大宽度。树的宽度是所有层中的最大宽度。这个二叉树与满二叉树（full binary tree）结构相同，但一些节点为空。
 * 每一层的宽度被定义为两个端点（该层最左和最右的非空节点，两端点间的null节点也计入长度）之间的长度。
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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
  if (!root) return 0

  let result = 0
  const queue = [{ node: root, index: 0 }]

  while (queue.length) {
    let i = queue.length
    let start = null
    let end = null
    while (i--) {
      const data = queue.shift()
      if (data.node.left) queue.push({ node: data.node.left, index: data.index * 2 })
      if (data.node.right) queue.push({ node: data.node.right, index: data.index * 2 + 1 })
      if (start === null) start = data.index
      end = data.index
    }

    result = Math.max(result, start === end ? 1 : (end - start) + 1)
  }

  return result
}
