/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a rooted binary tree, return the lowest common ancestor of its deepest leaves.
 *
 * Recall that:
 * 1. The node of a binary tree is a leaf if and only if it has no children
 * 2. The depth of the root of the tree is 0, and if the depth of a node is d, the depth of each of its children is d+1.
 * 3. The lowest common ancestor of a set S of nodes is the node A with the largest depth such that every node in S is in the subtree with root A.
 *
 * Example 1:
 * Input: root = [1,2,3]
 * Output: [1,2,3]
 * Explanation:
 * 1. The deepest leaves are the nodes with values 2 and 3.
 * 2. The lowest common ancestor of these leaves is the node with value 1.
 * 3. The answer returned is a TreeNode object (not an array) with serialization "[1,2,3]".
 *
 * Example 2:
 * Input: root = [1,2,3,4]
 * Output: [4]
 *
 * Example 3:
 * Input: root = [1,2,3,4,5]
 * Output: [2,4,5]
 *
 * Constraints:
 * 1. The given tree will have between 1 and 1000 nodes.
 * 2. Each node of the tree will have a distinct value between 1 and 1000
 *
 * 给你一个有根节点的二叉树，找到它最深的叶节点的最近公共祖先。
 * 回想一下：
 * 1. 叶节点 是二叉树中没有子节点的节点
 * 2. 树的根节点的 深度 为 0，如果某一节点的深度为 d，那它的子节点的深度就是 d+1
 * 3. 如果我们假定 A 是一组节点 S 的 最近公共祖先，S 中的每个节点都在以 A 为根节点的子树中，且 A 的深度达到此条件下可能的最大值。
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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
  const dfs = (node, depth) => {
    if (!node) return [null, 0]
    if (!node.left && !node.right) return [node, depth]

    const left = dfs(node.left, depth + 1)
    const right = dfs(node.right, depth + 1)

    if (left[1] === right[1]) return [node, left[1]]
    return left[1] > right[1] ? left : right
  }

  const result = dfs(root, 0)
  return result[0]
}
