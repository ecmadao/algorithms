/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree, return the values of its boundary in anti-clockwise direction starting from root.
 * Boundary includes left boundary, leaves, and right boundary in order without duplicate nodes.  (The values of the nodes may still be duplicates.)
 * Left boundary is defined as the path from root to the left-most node.
 * Right boundary is defined as the path from root to the right-most node.
 * If the root doesn't have left subtree or right subtree, then the root itself is left boundary or right boundary.
 * Note this definition only applies to the input binary tree, and not applies to any subtrees.
 *
 * The left-most node is defined as a leaf node you could reach when you always firstly travel to the left subtree if exists.
 * If not, travel to the right subtree. Repeat until you reach a leaf node.
 * The right-most node is also defined by the same way with left and right exchanged.
 *
 * 给定一棵二叉树，以逆时针顺序从根开始返回其边界。边界按顺序包括左边界、叶子结点和右边界而不包括重复的结点。 (结点的值可能重复)
 * 左边界的定义是从根到最左侧结点的路径。右边界的定义是从根到最右侧结点的路径。
 * 若根没有左子树或右子树，则根自身就是左边界或右边界。注意该定义只对输入的二叉树有效，而对子树无效。
 * 最左侧结点的定义是：在左子树存在时总是优先访问，如果不存在左子树则访问右子树。重复以上操作，首先抵达的结点就是最左侧结点。
 * 最右侧结点的定义方式相同，只是将左替换成右。
 *
 * Example1:
 * Input:
     1
      \
      2
    / \
    3   4
 *
 * Ouput:
 * [1, 3, 4, 2]
 * Explanation:
 * The root doesn't have left subtree, so the root itself is left boundary.
 * The leaves are node 3 and 4.
 * The right boundary are node 1,2,4. Note the anti-clockwise direction means you should output reversed right boundary.
 * So order them in anti-clockwise without duplicates and we have [1,3,4,2].
 *
 * Example2:
 * Input:
        ____1_____
      /          \
      2            3
     / \          /
    4   5        6
      / \      / \
      7   8    9  10

 * Ouput:
 * [1,2,4,7,8,9,10,6,3]
 * Explanation:
 * The left boundary are node 1,2,4. (4 is the left-most node according to definition)The leaves are node 4,7,8,9,10.
 * The right boundary are node 1,3,6,10. (10 is the right-most node).
 * So order them in anti-clockwise without duplicate nodes we have [1,2,4,7,8,9,10,6,3].
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
 *
 * 前序遍历
 * flag:
 *  0: root
 *  1: left
 *  2: right
 *  3: other
 */

const isLeft = flag => flag === 0 || flag === 1
const isRight = flag => flag === 0 || flag === 2
const isBottom = node => node.flag === 3 && !node.left && !node.right

const getFlag = (node, left) => {
  if (isLeft(node.flag) && left) return 1
  if (isRight(node.flag) && !left) return 2

  if (!left && !node.left && isLeft(node.flag)) return 1
  if (left && !node.right && isRight(node.flag)) return 2
  return 3
}

var boundaryOfBinaryTree = function(root) {
  if (!root) return []

  root.flag = 0
  const queue = [root]

  const lefts = []
  const rights = []
  const bottoms = []

  while (queue.length) {
    const node = queue.shift()

    if (node.flag === 0) {
      lefts.push(node.val)
    } else if (isRight(node.flag)) {
      rights.unshift(node.val)
    } else if (isLeft(node.flag)) {
      lefts.push(node.val)
    } else if (isBottom(node)) {
      bottoms.push(node.val)
    }

    if (node.right) {
      node.right.flag = getFlag(node, false)
      queue.unshift(node.right)
    }
    if (node.left) {
      node.left.flag = getFlag(node, true)
      queue.unshift(node.left)
    }
  }

  return [...lefts, ...bottoms, ...rights]
}

console.log(
  boundaryOfBinaryTree([1,2,3,4,5,6,null,null,null,7,8,9,10]) // [1,2,4,7,8,9,10,6,3]
)
