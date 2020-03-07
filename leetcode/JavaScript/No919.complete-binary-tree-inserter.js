/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible.
 * Write a data structure CBTInserter that is initialized with a complete binary tree and supports the following operations:
 * 1. CBTInserter(TreeNode root) initializes the data structure on a given tree with head node root;
 * 2. CBTInserter.insert(int v) will insert a TreeNode into the tree with value node.val = v so that the tree remains complete, and returns the value of the parent of the inserted TreeNode;
 * 3. CBTInserter.get_root() will return the head node of the tree.
 *
 * Example 1:
 * Input: inputs = ["CBTInserter","insert","get_root"], inputs = [[[1]],[2],[]]
 * Output: [null,1,[1,2]]
 *
 * Example 2:
 * Input: inputs = ["CBTInserter","insert","insert","get_root"], inputs = [[[1,2,3,4,5,6]],[7],[8],[]]
 * Output: [null,3,4,[1,2,3,4,5,6,7,8]]
 *
 * Note:
 * 1. The initial given tree is complete and contains between 1 and 1000 nodes.
 * 2. CBTInserter.insert is called at most 10000 times per test case.
 * 3. Every value of a given or inserted node is between 0 and 5000.
 *
 * 完全二叉树是每一层（除最后一层外）都是完全填充（即，结点数达到最大）的，并且所有的结点都尽可能地集中在左侧。
 * 设计一个用完全二叉树初始化的数据结构 CBTInserter，它支持以下几种操作：
 * 1. CBTInserter(TreeNode root) 使用头结点为 root 的给定树初始化该数据结构；
 * 2. CBTInserter.insert(int v) 将 TreeNode 插入到存在值为 node.val = v  的树中以使其保持完全二叉树的状态，并返回插入的 TreeNode 的父结点的值；
 * 3. CBTInserter.get_root() 将返回树的头结点
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
 */
var CBTInserter = function(root) {
  this.root = root
  this.layers = this.bfs(root)
};

const getDepth = (node) => {
  let depth = 0
  while (node) {
    depth += 1
    node = node.left
  }
  return depth
}

CBTInserter.prototype.bfs = function(root) {
  const sec = []
  const last = []
  const queue = [root]
  let depth = 0
  const DEPTH = getDepth(root)

  while (queue.length) {
    depth += 1
    let len = queue.length
    while (len) {
      const node = queue.shift()
      if (depth + 1 === DEPTH && (!node.left || !node.right)) {
        sec.push(node)
      } else if (depth === DEPTH) {
        last.push(node)
      }
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      len -= 1
    }
  }

  const result = []
  if (sec.length) result.push(sec)
  if (last.length) result.push(last)
  return result
}

/**
* @param {number} v
* @return {number}
*/
CBTInserter.prototype.insert = function(v) {
  const node = this.layers[0][0]
  const newNode = new TreeNode(v)
  if (!node.left) {
    node.left = newNode
  } else {
    node.right = newNode
    this.layers[0].shift()
  }
  if (!this.layers[1]) this.layers[1] = []
  this.layers[1].push(newNode)

  if (!this.layers[0].length) this.layers.shift()
  return node.val
};

/**
* @return {TreeNode}
*/
CBTInserter.prototype.get_root = function() {
  return this.root
};

/**
* Your CBTInserter object will be instantiated and called as such:
* var obj = new CBTInserter(root)
* var param_1 = obj.insert(v)
* var param_2 = obj.get_root()
*/