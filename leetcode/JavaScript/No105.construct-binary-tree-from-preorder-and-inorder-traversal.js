/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given preorder and inorder traversal of a tree, construct the binary tree.
 *
 * Note:
 * You may assume that duplicates do not exist in the tree.
 *
 * 根据前序遍历和中序遍历还原树
 */

/**
 * 思路：
 * 假定已知二叉树如下：
         7
       /   \
    10      2
   /   \    /
  4    3    8
        \  /
        1 11
 * 那么它的先序遍历和中序遍历的结果如下：
 * preorder = [7, 10, 4, 3, 1, 2, 8, 11]
 * inorder = [4, 10, 3, 1, 7, 11, 8, 2]
 *
 * 根据 preorder 的第一个元素，可以获取当前树的根节点
 * 之后，在 inorder 中获取到根节点的值的索引，根据该索引，把 inorder 分成两部分：[4, 10, 3, 1] 和 [11, 8, 2]
 * 分别是左子树的全部元素和右子树的全部元素
 * 然后利用这两部分的长度，再把 preorder 分成两部分：[10, 4, 3, 1] 和 [2, 8, 11]，分别是左子树的 preorder 和右子树的 preorder
 * 递归，即可还原树结构
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder 前序遍历
 * @param {number[]} inorder 中序遍历
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length) return null;
  const val = preorder[0];
  const root = new TreeNode(val);
  const rootIndex = inorder.findIndex(v => v === val);

  const inLeft = inorder.slice(0, rootIndex);
  const inRight = inorder.slice(rootIndex + 1);
  const preLeft = preorder.slice(1, inLeft.length + 1);
  const preRight = preorder.slice(inLeft.length + 1);

  root.left = buildTree(preLeft, inLeft);
  root.right = buildTree(preRight, inRight);
  return root;
};
