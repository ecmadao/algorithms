/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary search tree and a node in it, find the in-order successor of that node in the BST.
 * The successor of a node p is the node with the smallest key greater than p.val.
 * 给你一个二叉搜索树和其中的某一个结点，请你找出该结点在树中顺序后继的节点。
 * 结点 p 的后继是值比 p.val 大的结点中键值最小的结点。
 *
 * Example1:
 * Input: root = [2,1,3], p = 1
 * Output: 2
 * Explanation: 1's in-order successor node is 2. Note that both p and the return value is of TreeNode type.
 *
 * Example2:
 * Input: root = [5,3,6,2,4,null,null,1], p = 6
 * Output: null
 * Explanation: There is no in-order successor of the current node, so the answer is null.
 *
 * Note:
 * 1. If the given node has no in-order successor in the tree, return null.
 * 2. It's guaranteed that the values of the tree are unique.
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
 * @param {TreeNode} p
 * @return {TreeNode}
 *
 * inorder traversal 中序遍历
 */
var inorderSuccessor = function(root, p) {
  if (!root) return null

  const queue = []
  let node = root

  while (node || queue.length) {
    if (node && node.val === p.val) {
      const f = queue.length ? queue.pop() : null
      // 寻找 node.right 的最左
      let r = node.right
      if (!r) return f
      while (r && r.left) r = r.left
      return r
    }
    if (node) {
      queue.push(node)
      node = node.left
    } else {
      node = queue.pop().right
    }
  }
  return null
}

var inorderSuccessor2 = function (root, p) {
  let result = null
  let node = root

  while (node) {
    if (p.val < node.val) {
      result = node
      node = node.left
    } else {
      node = node.right
    }
  }
  return result
}

// Input: [2,null,3], 2
// Output: 3

// Input: [6,2,8,0,4,7,9,null,null,3,5]
// Output: 2