/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * The thief has found himself a new place for his thievery again.
 * There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house.
 * After a tour, the smart thief realized that "all houses in this place forms a binary tree".
 * It will automatically contact the police if two directly-linked houses were broken into on the same night.
 * Determine the maximum amount of money the thief can rob tonight without alerting the police.
 *
 * Example:
 *    3
    / \
   2   3
    \   \
     3   1
 * Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
 *
 *     3
      / \
    4   5
    / \   \
  1   3   1
 * Maximum amount of money the thief can rob = 4 + 5 = 9.
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
var rob_1 = function(root) {
  const dfs = (node) => {
    if (!node) return [0, 0] // [robbed, unrobbed]
    if (!node.left && !node.right) return [node.val, 0]

    const tmp1 = dfs(node.left)
    const tmp2 = dfs(node.right)

    return [node.val + tmp1[1] + tmp2[1], Math.max(...tmp1) + Math.max(...tmp2)]
  }

  return Math.max(...dfs(root))
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob_2 = function(root, pass) {
  if (!root) return 0
  if (pass) return rob_2(root.left) + rob_2(root.right)

  return Math.max(
    rob_2(root.left) + rob_2(root.right),
    root.val + rob_2(root.left, true) + rob_2(root.right, true)
  )
}
