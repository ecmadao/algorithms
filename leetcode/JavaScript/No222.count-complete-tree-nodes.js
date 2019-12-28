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
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
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

// Test case
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const buildTree = (arr) => {
  let head = null;
  const nodes = [];

  while (arr.length) {
    const num = arr.shift();
    const treeNode = new TreeNode(num);

    if (head === null) head = treeNode;

    if (nodes.length) {
      const node = nodes.shift();
      if (!node.left) {
        node.left = treeNode;
      } else if (!node.right) {
        node.right = treeNode
      }
      if (!node.right) nodes.unshift(node);
    }
    nodes.push(treeNode);
  }

  return head;
};

const nodeTree = buildTree([1,2,3,4,5,6]);
countNodes(nodeTree);
