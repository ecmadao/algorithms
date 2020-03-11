/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given two binary search trees root1 and root2.
 * Return a list containing all the integers from both trees sorted in ascending order.
 *
 * Example 1:
 * Input: root1 = [2,1,4], root2 = [1,0,3]
 * Output: [0,1,1,2,3,4]
 *
 * Example 2:
 * Input: root1 = [0,-10,10], root2 = [5,1,7,0,2]
 * Output: [-10,0,0,1,2,5,7,10]
 *
 * Example 3:
 * Input: root1 = [], root2 = [5,1,7,0,2]
 * Output: [0,1,2,5,7]
 *
 * Example 4:
 * Input: root1 = [0,-10,10], root2 = []
 * Output: [-10,0,10]
 *
 * Example 5:
 * Input: root1 = [1,null,8], root2 = [8,1]
 * Output: [1,1,8,8]
 *
 * Constraints:
 * 1. Each tree has at most 5000 nodes.
 * 2. Each node's value is between [-10^5, 10^5].
 *
 * 给你 root1 和 root2 这两棵二叉搜索树。
 * 请你返回一个列表，其中包含 两棵树 中的所有整数并按 升序 排序。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  const preOrderTraversal = (node, list) => {
    if (!node) return list
    const queue = []

    let i = 0
    while (node || queue.length) {
      if (node) {
        queue.push(node)
        node = node.left
      } else {
        node = queue.pop()
        while (i < list.length && list[i] < node.val) i += 1
        list.splice(i, 0, node.val)
        i += 1
        node = node.right
      }
    }
    return list
  }

  const arr1 = preOrderTraversal(root1, [])
  const arr2 = preOrderTraversal(root2, arr1)

  return arr2
}
