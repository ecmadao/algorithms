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
var connect = function(root) {
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
