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
 */
var kthSmallest = function(root, k) {
  const arr = [];
  const tmps = [];
  let node = root;
  while (node || tmps.length) {
    if (node) {
      tmps.push(node);
      node = node.left;
    } else {
      const tmp = tmps.pop();
      arr.push(tmp.val);
      node = tmp.right;
    }
    if (arr.length === k) break;
  }
  return arr[k - 1];
};

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
