/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Follow up for problem "Populating Next Right Pointers in Each Node".
 * What if the given tree could be any binary tree? Would your previous solution still work?
 *
 * Note:
 * You may only use constant extra space.
 *
 * Example:
 * Given the following binary tree,
         1
       /  \
      2    3
     / \    \
    4   5    7
 * After calling your function, the tree should look like:
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \    \
    4-> 5 -> 7 -> NULL
 *
 * 给定一个二叉树
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
 * 初始状态下，所有 next 指针都被设置为 NULL
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
      if (!node) continue;
      if (pre) pre.next = node;
      pre = node;
      if (pre.left) nextNodes.push(pre.left);
      if (pre.right) nextNodes.push(pre.right);
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
