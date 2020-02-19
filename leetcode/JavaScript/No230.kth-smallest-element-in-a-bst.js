/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
 *
 * Note:
 * You may assume k is always valid, 1 ≤ k ≤ BST's total elements.
 *
 * Follow up:
 * What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently?
 * How would you optimize the kthSmallest routine?
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 方法一：中序遍历：左 - 中 - 右
 */

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 *
 * 利用中序遍历，在 BST 二叉树中将从小到大返回数据
 */
var kthSmallest = function(root, k) {
  if (!root || !k) return null

  let node = root
  const queue = []

  while (node || queue.length) {
    if (node) {
      queue.push(node)
      node = node.left
    } else {
      node = queue.pop()
      k -= 1
      if (!k) return node.val
      node = node.right
    }
  }
}

/**
 * 方法二：计算每个节点所拥有的左右子节点总数
 */

const countNodeCounts = (node, withRight = false) => {
  if (!node) return 0;
  return 1 + countNodeCounts(node.left, true) + (withRight ? countNodeCounts(node.right, true) : 0);
};

var kthSmallest = function(root, k) {
  const leftCount = countNodeCounts(root);
  if (leftCount > k) {
    return kthSmallest(root.left, k);
  } else if (leftCount < k) {
    return kthSmallest(root.right, k - leftCount);
  }
  return root.val;
};
