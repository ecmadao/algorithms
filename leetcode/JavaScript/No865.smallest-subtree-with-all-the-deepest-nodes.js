/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree rooted at root, the depth of each node is the shortest distance to the root.
 * A node is deepest if it has the largest depth possible among any node in the entire tree.
 * The subtree of a node is that node, plus the set of all descendants of that node.
 * Return the node with the largest depth such that it contains all the deepest nodes in its subtree.
 *
 * Example 1:
 * Input: [3,5,1,6,2,0,8,null,null,7,4]
 * Output: [2,7,4]
 * Explanation:
 * We return the node with value 2, colored in yellow in the diagram.
 * The nodes colored in blue are the deepest nodes of the tree.
 * The input "[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]" is a serialization of the given tree.
 * The output "[2, 7, 4]" is a serialization of the subtree rooted at the node with value 2.
 * Both the input and output have TreeNode type.
 *
 * Note:
 * 1. The number of nodes in the tree will be between 1 and 500.
 * 2. The values of each node are unique
 *
 * 给定一个根为 root 的二叉树，每个结点的深度是它到根的最短距离。
 * 如果一个结点在整个树的任意结点之间具有最大的深度，则该结点是最深的。
 * 一个结点的子树是该结点加上它的所有后代的集合。
 * 返回能满足“以该结点为根的子树中包含所有最深的结点”这一条件的具有最大深度的结点
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
var subtreeWithAllDeepest = function(root) {
  let nodes = []

  const dfs = (node, queue) => {
    if (!node) {
      if (!nodes.length || nodes[0].length === queue.length) {
        nodes.push([...queue])
      } else if (nodes[0].length < queue.length) {
        nodes = [[...queue]]
      }
      return
    }

    queue.push(node)
    dfs(node.left, queue)
    dfs(node.right, queue)
    queue.pop()
  }

  dfs(root, [])

  if (!nodes.length) return null
  if (nodes.length === 1) return nodes[0]

  let i = nodes[0].length - 1
  while (i >= 0) {
    const vals = new Set()
    for (const list of nodes) {
      vals.add(list[i].val)
      if (vals.size > 1) break
    }
    if (vals.size === 1) return nodes[0][i]
    i -= 1
  }
}
