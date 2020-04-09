/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree, return the vertical order traversal of its nodes values.
 * For each node at position (X, Y), its left and right children respectively will be at positions (X-1, Y-1) and (X+1, Y-1).
 * Running a vertical line from X = -infinity to X = +infinity, whenever the vertical line touches some nodes, we report the values of the nodes in order from top to bottom (decreasing Y coordinates).
 * If two nodes have the same position, then the value of the node that is reported first is the value that is smaller.
 * Return an list of non-empty reports in order of X coordinate.  Every report will have a list of values of nodes.
 * 
 * Example 1:
 * Input: [3,9,20,null,null,15,7]
 * Output: [[9],[3,15],[20],[7]]
 * Explanation: 
 * Without loss of generality, we can assume the root node is at position (0, 0):
 * Then, the node with value 9 occurs at position (-1, -1);
 * The nodes with values 3 and 15 occur at positions (0, 0) and (0, -2);
 * The node with value 20 occurs at position (1, -1);
 * The node with value 7 occurs at position (2, -2).
 * 
 * Example 2:
 * Input: [1,2,3,4,5,6,7]
 * Output: [[4],[2],[1,5,6],[3],[7]]
 * Explanation: 
 * The node with value 5 and the node with value 6 have the same position according to the given scheme.
 * However, in the report "[1,5,6]", the node value of 5 comes first since 5 is smaller than 6.
 * 
 * Note:
 * The tree will have between 1 and 1000 nodes.
 * Each node's value will be between 0 and 1000.
 * 
 * 给定二叉树，按垂序遍历返回其结点值。
 * 对位于 (X, Y) 的每个结点而言，其左右子结点分别位于 (X-1, Y-1) 和 (X+1, Y-1)。
 * 把一条垂线从 X = -infinity 移动到 X = +infinity ，每当该垂线与结点接触时，我们按从上到下的顺序报告结点的值（ Y 坐标递减）。
 * 如果两个结点位置相同，则首先报告的结点值较小。
 * 按 X 坐标顺序返回非空报告的列表。每个报告都有一个结点值列表。
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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
  const res = []
  if (!root) return res

  const queue = [[root, 0, 0]]
  const search = (target, arr, getVal) => {
    let i = 0
    let j = res.length - 1
    while (i <= j) {
      const mid = Math.floor((i + j) / 2)
      const val = getVal(arr, mid)
      if (val === target) return mid
      if (val < target) {
        i = mid + 1
      } else {
        j = mid - 1
      }
    }
    return i
  }

  while (queue.length) {
    let len = queue.length
    while (len) {
      const [node, x, y] = queue.shift()

      const index = search(x, res, (arr, k) => arr[k].x)
      // console.log(`node: ${node.val}, x:y -> ${x}:${y}, index: ${index}`)
      if (!res[index] || res[index].x !== x) {
          res.splice(index, 0, {
              x,
              list: []
          })
      }
      res[index].list.push({ y, val: node.val })
      if (node.left) queue.push([node.left, x - 1, y - 1])
      if (node.right) queue.push([node.right, x + 1, y - 1])
      len -= 1
    }
  }

  return res.map(data => data.list.sort((item1, item2) => {
    if (item1.y === item2.y) return item1.val - item2.val
    return item2.y - item1.y
  }).map(item => item.val))
};