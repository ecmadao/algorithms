/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given the root of a tree, you are asked to find the most frequent subtree sum.
 * The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself).
 * So what is the most frequent subtree sum value? If there is a tie, return all the values with the highest frequency in any order.
 *
 * Examples 1
 * Input:
 *   5
 *  /  \
 * 2   -3
 * return [2, -3, 4], since all the values happen only once, return all of them in any order.
 *
 * Examples 2
 * Input:
 *   5
 *  /  \
 * 2   -5
 * return [2], since 2 happens twice, however -5 only occur once.
 * Note: You may assume the sum of values in any subtree is in the range of 32-bit signed integer.
 *
 * 给出二叉树的根，找出出现次数最多的子树元素和。一个结点的子树元素和定义为以该结点为根的二叉树上所有结点的元素之和（包括结点本身）。
 * 然后求出出现次数最多的子树元素和。如果有多个元素出现的次数相同，返回所有出现次数最多的元素（不限顺序）
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
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {

  let maxCount = -Infinity
  const sumMap = {}
  const countMap = {}

  const dfs = (node) => {
    if (!node) return 0

    const left = dfs(node.left)
    const right = dfs(node.right)

    const sum = node.val + left + right
    const count = (sumMap[sum] || 0) + 1
    sumMap[sum] = count
    if (count > maxCount) maxCount = count

    if (!countMap[count]) countMap[count] = new Set()
    countMap[count].add(sum)

    if (count > 1) {
      countMap[count - 1].delete(sum)
    }

    return sum
  }

  dfs(root, sumMap)
  if (maxCount === -Infinity) return []
  return [...countMap[maxCount]]
}
