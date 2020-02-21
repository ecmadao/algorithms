/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * You need to construct a binary tree from a string consisting of parenthesis and integers.
 * The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis.
 * The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
 *
 * You always start to construct the left child node of the parent first if it exists.
 *
 * Example:
 * Input: "4(2(3)(1))(6(5))"
 * Output: return the tree root node representing the following tree:
 *        4
 *      /   \
 *     2     6
 *    / \   /
 *   3   1 5
 *
 * Note:
 * 1. There will only be '(', ')', '-' and '0' ~ '9' in the input string.
 * 2. An empty tree is represented by "" instead of "()"
 *
 * 你需要从一个包括括号和整数的字符串构建一棵二叉树。
 * 输入的字符串代表一棵二叉树。它包括整数和随后的0，1或2对括号。整数代表根的值，一对括号内表示同样结构的子树。
 * 若存在左子结点，则从左子结点开始构建
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function(s) {
  if (!s) return null

  let i = 0
  while (s[i] !== '(' && s[i] !== ')' && i < s.length) i += 1
  const root = new TreeNode(parseInt(s.slice(0, i)))

  let left = 0
  let start = null
  const childs = []

  while (i < s.length) {
    if (s[i] === '(') {
      if (start === null) start = i + 1
      left += 1
    } else if (s[i] === ')') {
      left -= 1
    }
    if (left === 0) {
      childs.push(str2tree(s.slice(start, i)))
      start = null
    }
    i += 1
  }
  root.left = childs[0] || null
  root.right = childs[1] || null
  return root
}
