/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Two elements of a binary search tree (BST) are swapped by mistake.
 * Recover the tree without changing its structure.
 *
 * Example1:
 * Input: [1,3,null,null,2]

     1
    /
   3
    \
     2

  Output: [3,1,null,null,2]

     3
    /
   1
    \
     2
 *
 * Example2:
 * Input: [3,1,4,null,null,2]

      3
    / \
  1   4
     /
    2

  Output: [2,1,4,null,null,3]

     2
    / \
  1   4
     /
   3
 *
 * Note:
 * A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?
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
 * @return {void} Do not return anything, modify root in-place instead.
 *
 * 对二叉搜索树进行 中序遍历的时候 访问到的元素是从小到大顺序排列的
 * 如我们对例 2 恢复好的树 进行中序遍历 得到的应该是  1 2 3 4
 * 在对错误的树进行中序遍历的时候，那如果对两个节点交换了顺序，
 * 那一定有两个地方是不满足：前一个元素 < 当前元素 < 后一个元素
 */
var recoverTree = function(root) {
  let pre = null
  let node1 = null
  let node2 = null

  const inorderTraversal = (node) => {
    if (node.left) inorderTraversal(node.left)

    if (pre && pre.val > node.val) {
      if (!node1) node1 = pre
      node2 = node
    }
    pre = node
    if (node.right) inorderTraversal(node.right)
  }

  inorderTraversal(root)
  const tmp = node1.val
  node1.val = node2.val
  node2.val = tmp
}
