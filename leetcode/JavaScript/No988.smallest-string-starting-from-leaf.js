/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given the root of a binary tree, each node has a value from 0 to 25 representing the letters 'a' to 'z': a value of 0 represents 'a', a value of 1 represents 'b', and so on.
 * Find the lexicographically smallest string that starts at a leaf of this tree and ends at the root.
 * (As a reminder, any shorter prefix of a string is lexicographically smaller: for example, "ab" is lexicographically smaller than "aba".  A leaf of a node is a node that has no children.)
 *
 * Example 1:
 * Input: [0,1,2,3,4,3,4]
 * Output: "dba"
 *
 * Example 2:
 * Input: [25,1,3,1,3,0,2]
 * Output: "adz"
 *
 * Example 3:
 * Input: [2,2,1,null,1,0,null,0]
 * Output: "abc"
 *
 * Note:
 * 1. The number of nodes in the given tree will be between 1 and 8500.
 * 2. Each node in the tree will have a value between 0 and 25.
 *
 * 给定一颗根结点为 root 的二叉树，书中的每个结点都有一个从 0 到 25 的值，分别代表字母 'a' 到 'z'：值 0 代表 'a'，值 1 代表 'b'，依此类推。
 * 找出按字典序最小的字符串，该字符串从这棵树的一个叶结点开始，到根结点结束。
 * （小贴士：字符串中任何较短的前缀在字典序上都是较小的：例如，在字典序上 "ab" 比 "aba" 要小。叶结点是指没有子结点的结点。）
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
 * @return {string}
 */
var smallestFromLeaf = function(root) {
  root.suffix = String.fromCharCode(root.val + 97)
  const queue = [root]

  let result = null
  while (queue.length) {
    const node = queue.pop()
    if (!node.left && !node.right) {
      if (result === null || node.suffix < result) result = node.suffix
    }
    if (node.left) {
      node.left.suffix = String.fromCharCode(node.left.val + 97) + node.suffix
      queue.push(node.left)
    }
    if (node.right) {
      node.right.suffix = String.fromCharCode(node.right.val + 97) + node.suffix
      queue.push(node.right)
    }
  }
  return result
}
