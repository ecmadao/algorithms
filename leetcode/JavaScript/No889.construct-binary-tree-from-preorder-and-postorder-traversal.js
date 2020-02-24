/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Return any binary tree that matches the given preorder and postorder traversals.
 * Values in the traversals pre and post are distinct positive integers.
 * 
 * Example 1:
 * Input: pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
 * Output: [1,2,3,4,5,6,7]
 * 
 * Note:
 * 1. 1 <= pre.length == post.length <= 30
 * 2. pre[] and post[] are both permutations of 1, 2, ..., pre.length.
 * 3. It is guaranteed an answer exists. If there exists multiple answers, you can return any of them.
 * 
 * 返回与给定的前序和后序遍历匹配的任何二叉树
 * pre 和 post 遍历中的值是不同的正整数
 * 每个输入保证至少有一个答案。如果有多个答案，可以返回其中一个
 */

/**
 * 思路：
 * 对于前序遍历，首位元素肯定是根节点，它同时位于后序遍历的最后一位
 * 然后，我们可以认为前序的首位元素后的第一位，是根节点的左子节点。找出左子节点在后序遍历中的位置 index
 * index 之前的后序遍历数据，一定是左子节点的左右子节点；同时利用长度，可以找到前序遍历根节点的右子节点的位置
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
  if (!pre.length || !post.length) return null

  const root = pre[0]
  const node = new TreeNode(root)

  if (pre.length > 1) {
    const left = pre[1]
    const index = post.indexOf(left)

    if (index !== -1) {
      node.left = constructFromPrePost(pre.slice(1), post.slice(0, index + 1))
      node.right = constructFromPrePost(pre.slice(1 + index + 1), post.slice(index + 1, -1))
    }
  }

  return node
}
