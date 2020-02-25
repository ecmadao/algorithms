/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree
    struct TreeLinkNode {
      TreeLinkNode *left;
      TreeLinkNode *right;
      TreeLinkNode *next;
    }
 * Populate each next pointer to point to its next right node.
 * If there is no next right node, the next pointer should be set to NULL.
 * Initially, all next pointers are set to NULL.
 *
 * Note:
 * You may only use constant extra space.
 * You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).
 *
 * Example:
 * Given the following perfect binary tree,
         1
       /  \
      2    3
     / \  / \
    4  5  6  7
 * After calling your function, the tree should look like:
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \  / \
    4->5->6->7 -> NULL
 *
 * 给定一个完美二叉树，其所有叶子节点都在同一层，每个父节点都有两个子节点。
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
 * 初始状态下，所有 next 指针都被设置为 NULL。
 *
 * 你只能使用常量级额外空间。
 * 使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。
 */

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect_1 = function(root) {
  const connectRight = (nodes) => {
    const nextNodes = [];
    let pre = null;
    while (nodes.length) {
      const node = nodes.shift();
      if (!node) break;
      if (pre) pre.next = node;
      pre = node;
      if (pre.left) nextNodes.push(pre.left, pre.right);
    }
    if (nextNodes.length) connectRight(nextNodes);
  };
  connectRight([root]);
};

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect_2 = function(root) {
  if (!root) return null

  const queue = [root]
  while (queue.length) {
    let len = queue.length
    let pre = null

    while (len) {
      const node = queue.shift()
      if (pre) pre.next = node
      pre = node
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      len -= 1
    }
  }

  return root
}
