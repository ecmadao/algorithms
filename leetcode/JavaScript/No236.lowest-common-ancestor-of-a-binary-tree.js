/**
 * Difficulty:
 * Medium
 *
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 * According to the definition of LCA on Wikipedia:
 * “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”
 *
 * Example:
 * Given the following binary search tree:  root = [3,5,1,6,2,0,8,null,null,7,4]
 *         _______3______
          /              \
        ___5__          ___1__
       /      \        /      \
      6      _2       0       8
            /  \
           7   4
 * Input: root, p = 5, q = 1
 * Output: 3
 * Explanation: The LCA of of nodes 5 and 1 is 3.
 *
 * Input: root, p = 5, q = 4
 * Output: 5
 * Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself
 * according to the LCA definition.
 */

/* ============== Solution 1 ============== */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor_1 = function(root, p, q) {
  if (!root) return root;
  const tmp = new Set([p, q]);
  let result = null;

  const find = (node) => {
    let count = 0;
    if (!node) return count;

    if (tmp.has(node)) {
      count += 1;
      tmp.delete(node);
    }
    if (!tmp.size) return count;

    const findLeft = find(node.left);
    if (findLeft === 2) return findLeft;
    count += findLeft;
    if (count === 2) {
      result = node;
      return count;
    }

    const findRight = find(node.right);
    if (findRight === 2) return findRight;
    count += findRight;
    if (count === 2) {
      result = node;
      return count;
    }
    return count;
  };

  find(root);
  return result;
};


/* ============== Solution 2 ============== */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor_2 = function(root, p, q) {
  if (!root) return root
  if (root === p || root === q) return root

  const left = lowestCommonAncestor_2(root.left, p, q)
  const right = lowestCommonAncestor_2(root.right, p, q)

  if (left && right) return root
  return left || right
}

/* ============== Solution 3 ============== */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 非递归深度优先遍历，记录遍历的节点路径。
 * 如果 p、q 的路径都找到了，则寻找两者的最近节点
 */
var lowestCommonAncestor = function(root, p, q) {
  if (!root) return null

  let q1 = []
  let q2 = []
  const queue = [root]
  while (queue.length) {
    const node = queue.pop()
    if (node.val === p.val || node.val === q.val) {
      if (q1.length) {
        q2.push(node)
        let index = 0
        while (index < Math.min(q1.length, q2.length) && q1[index] === q2[index]) index += 1
        return q1[index - 1]
      } else {
        q1 = [...q2, node]
      }
    }

    if (!node.left && !node.right) {
      // 回退
      let child = node
      while (q2.length > 1) {
        const last = q2.pop()
        if (last.left && child.val === last.left.val && last.right) {
          q2.push(last)
          break
        }
        child = last
      }
      if (!q2.length) return root
    } else {
      if (node.right) queue.push(node.right)
      if (node.left) queue.push(node.left)
      q2.push(node)
    }
  }
}
