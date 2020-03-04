/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * We run a preorder depth first search on the root of a binary tree.
 * At each node in this traversal, we output D dashes (where D is the depth of this node), then we output the value of this node.
 * (If the depth of a node is D, the depth of its immediate child is D+1. The depth of the root node is 0.)
 * If a node has only one child, that child is guaranteed to be the left child.
 * Given the output S of this traversal, recover the tree and return its root.
 *
 * Example 1:
 * Input: "1-2--3--4-5--6--7"
 * Output: [1,2,5,3,4,6,7]
 *
 * Example 2:
 * Input: "1-2--3---4-5--6---7"
 * Output: [1,2,5,3,null,6,null,4,null,7]
 *
 * Example 3:
 * Input: "1-401--349---90--88"
 * Output: [1,401,null,349,88,90]
 *
 * Note:
 * 1. The number of nodes in the original tree is between 1 and 1000.
 * 2. Each node will have a value between 1 and 10^9.
 *
 * 我们从二叉树的根节点 root 开始进行深度优先搜索。
 * 在遍历中的每个节点处，我们输出 D 条短划线（其中 D 是该节点的深度），然后输出该节点的值。
 * （如果节点的深度为 D，则其直接子节点的深度为 D + 1。根节点的深度为 0）。
 * 如果节点只有一个子节点，那么保证该子节点为左子节点。
 * 给出遍历输出 S，还原树并返回其根节点 root
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const nums = new Set(
  Array.from({ length: 10 }, (_, i) => `${i}`)
)

/**
* @param {string} S
* @return {TreeNode}
*/
var recoverFromPreorder = function(S) {
  if (!S) return null

  const queue = S.split(/[0-9]{1,}/)
  if (!queue.length) return null

  let i = 0
  while (i < S.length && nums.has(S[i])) i += 1

  const num = Number(S.slice(0, i))
  const node = new TreeNode(num)

  const depth = queue[1]
  let index = i + depth.length
  for (let i = 2; i < queue.length - 1; i += 1) {
    if (queue[i].length <= depth.length) break
    while (index < S.length && nums.has(S[index])) index += 1
    index += queue[i].length
  }

  while (index < S.length && nums.has(S[index])) index += 1
  node.left = recoverFromPreorder(S.slice(i + depth.length, index))
  while (index < S.length && S[index] === '-') index += 1
  node.right = recoverFromPreorder(S.slice(index))

  return node
}
