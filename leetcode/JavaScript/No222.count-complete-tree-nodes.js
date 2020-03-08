/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a complete binary tree, count the number of nodes.
 *
 * Note:
 * Definition of a complete binary tree from Wikipedia:
 * In a complete binary tree every level, except possibly the last,
 * is completely filled, and all nodes in the last level are as far left as possible.
 * It can have between 1 and 2h nodes inclusive at the last level h.
 *
 * Example:
 * Input:
      1
     / \
    2   3
   / \  /
  4  5 6
 * Output: 6
 *
 * 给一个完全二叉树，求树中全部节点数。
 * 完全二叉树：
 * 在一棵二叉树中，除最后一层外，若其余层都是满的，并且最后一层或者是满的，或者是在右边缺少连续若干节点，则此二叉树为完全二叉树
 *
 * BFS 即可
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * ====================== Solution 1 ======================
 * DFS
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes_1 = function(root) {
  if (!root) return 0
  const queue = [root]
  let result = 0

  while (queue.length) {
    const node = queue.pop()
    result += 1
    if (node.right) queue.push(node.right)
    if (node.left) queue.push(node.left)
  }
  return result
}

/**
 * ====================== Solution 2 ======================
 * BFS 到最后一层，然后二分搜索
*/

const isSec = node => node.left && !node.left.left && !node.left.right

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes_2 = function(root) {
  if (!root) return 0

  let count = 0
  const queue = [root]

  while (queue.length) {
    let len = queue.length
    count += len
    if (isSec(queue[0]))break

    while (len) {
      const node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      len -= 1
    }
  }

  let i = 0
  let j = queue.length - 1
  while (i <= j) {
    const mid = Math.floor((i + j) / 2)
    const node = queue[mid]
    if (node.left && node.right) {
      i = mid + 1
    } else {
      j = mid - 1
    }
  }

  return count + i * 2 + (queue[i] && queue[i].left ? 1 : 0)
}
