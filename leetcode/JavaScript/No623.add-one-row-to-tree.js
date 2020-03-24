/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given the root of a binary tree, then value v and depth d,
 * you need to add a row of nodes with value v at the given depth d. The root node is at depth 1.
 * The adding rule is: given a positive integer depth d, for each NOT null tree nodes N in depth d-1,
 * create two tree nodes with value v as N's left subtree root and right subtree root.
 * And N's original left subtree should be the left subtree of the new left subtree root, its original right subtree should be the right subtree of the new right subtree root.
 * If depth d is 1 that means there is no depth d-1 at all, then create a tree node with value v as the new root of the whole original tree, and the original tree is the new root's left subtree.
 *
 * Example 1:
 * Input:
 * A binary tree as following:
 *        4
 *      /   \
 *     2     6
 *    / \   /
 *   3   1 5
 * v = 1
 * d = 2
 *
 * Output:
 *        4
 *       / \
 *      1   1
 *     /     \
 *    2       6
 *   / \     /
 *  3   1   5
 *
 * Example 2:
 * Input:
 * A binary tree as following:
 *       4
 *      /
 *     2
 *    / \
 *   3   1
 * v = 1
 * d = 3
 * Output:
 *       4
 *      /
 *     2
 *    / \
 *   1   1
 *  /     \
 * 3       1
 *
 * Note:
 * 1. The given d is in range [1, maximum depth of the given tree + 1].
 * 2. The given binary tree has at least one tree node.
 *
 * 给定一个二叉树，根节点为第1层，深度为 1。在其第 d 层追加一行值为 v 的节点。
 * 添加规则：给定一个深度值 d （正整数），针对深度为 d-1 层的每一非空节点 N，为 N 创建两个值为 v 的左子树和右子树。
 * 将 N 原先的左子树，连接为新节点 v 的左子树；将 N 原先的右子树，连接为新节点 v 的右子树。
 * 如果 d 的值为 1，深度 d - 1 不存在，则创建一个新的根节点 v，原先的整棵树将作为 v 的左子树。
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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
  if (d === 1) {
    const node = new TreeNode(v)
    node.left = root
    return node
  }

  const queue = [root]
  const layers = []
  while (queue.length && d > 1) {
    let len = queue.length
    while (len) {
      const node = queue.shift()
      if (d === 2) layers.push(node)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      len -= 1
    }

    d -= 1
  }

  for (const node of layers) {
    const { left, right } = node
    node.left = new TreeNode(v)
    node.right = new TreeNode(v)
    node.left.left = left
    node.right.right = right
  }
  return root
};