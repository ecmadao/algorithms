/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 检查子树。你有两棵非常大的二叉树：T1，有几万个节点；T2，有几万个节点。设计一个算法，判断 T2 是否为 T1 的子树。
 * 如果 T1 有这么一个节点 n，其子树与 T2 一模一样，则 T2 为 T1 的子树，也就是说，从节点 n 处把树砍断，得到的树与 T2 完全相同。
 *
 * 示例 1:
 * 输入：t1 = [1, 2, 3], t2 = [2]
 * 输出：true
 *
 * 示例 2:
 * 输入：t1 = [1, null, 2, 4], t2 = [3, 2]
 * 输出：false
 *
 * 提示：
 * 树的节点数目范围为[0, 20000]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {boolean}
 */
var checkSubTree = function(t1, t2) {
  if (!t2) return true
  if (!t1) return false

  const queue = [t2]
  const preOrder = []
  while (queue.length) {
    const node = queue.pop()
    preOrder.push(node ? node.val : null)
    if (node) queue.push(node.left)
    if (node) queue.push(node.right)
  }

  queue.push(t1)
  let index = 0

  while (queue.length) {
    const node = queue.pop()
    const val = node ? node.val : null
    if (val === preOrder[index]) {
      index += 1

      if (index === preOrder.length) return true
    } else {
      index = 0
    }
    if (node) queue.push(node.left)
    if (node) queue.push(node.right)
  }
  return false
}
