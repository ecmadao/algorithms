/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a complete binary tree, count the number of nodes.
 *
 * Note:
 * Definition of a complete binary tree from Wikipedia:
 * In a complete binary tree every level, except possibly the last,
 * is completely filled, and all nodes in the last level are as far left as possible.
 * It can have between 1 and 2h nodes inclusive at the last level h.
 *
 * Example:
 * Input:
      1
     / \
    2   3
   / \  /
  4  5 6
 * Output: 6
 *
 * 给一个完全二叉树，求树中全部节点数。
 * 完全二叉树：
 * 在一棵二叉树中，除最后一层外，若其余层都是满的，并且最后一层或者是满的，或者是在右边缺少连续若干节点，则此二叉树为完全二叉树
 *
 * 在该题中使用 BFS 会超时，因为遍历了不必要的节点：如果倒数第二层中，从某个节点起，就不再有最后一层的子节点，则没有必要继续遍历
 * 因此可以进行截断式的 BSF
 * 或回溯的 DFS：
 * 先从树的最左侧边，遍历到最底部，获取其高度，然后向上回溯每个父节点。
 * 如果父节点的左右节点都遍历过，继续回溯；
 * 如果获取到了倒数第二层的父节点，检查其左右子节点。缺少任意一个都可以停止遍历
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
var countNodes = function(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  let node = root;
  const nodes = [];
  let count = 0;
  let layerCount = 1;
  let layer = 0;

  while (node.left) {
    layer += 1;
    count += layerCount;
    layerCount *= 2;

    node.leftChecked = true;
    nodes.push({
      node,
      layer,
    });
    node = node.left;
  }

  while (nodes.length) {
    const item = nodes.pop();
    const curNode = item.node;

    if (item.layer < layer) {
      if (curNode.leftChecked && curNode.rightChecked) continue;
      if (!curNode.leftChecked) {
        curNode.leftChecked = true;
        nodes.push({
          layer: item.layer,
          node: curNode
        });
        nodes.push({
          layer: item.layer + 1,
          node: curNode.left
        });
      } else if (!curNode.rightChecked) {
        nodes.push({
          layer: item.layer + 1,
          node: curNode.right
        });
      }
    } else {
      if (!curNode.left) break;
      if (!curNode.right) {
        count += 1;
        break;
      }
      count += 2;
      continue;
    }
  }
  return count;
};


// Test case
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const buildTree = (arr) => {
  let head = null;
  const nodes = [];

  while (arr.length) {
    const num = arr.shift();
    const treeNode = new TreeNode(num);

    if (head === null) head = treeNode;

    if (nodes.length) {
      const node = nodes.shift();
      if (!node.left) {
        node.left = treeNode;
      } else if (!node.right) {
        node.right = treeNode
      }
      if (!node.right) nodes.unshift(node);
    }
    nodes.push(treeNode);
  }

  return head;
};

const nodeTree = buildTree([1,2,3,4,5,6]);
countNodes(nodeTree);
