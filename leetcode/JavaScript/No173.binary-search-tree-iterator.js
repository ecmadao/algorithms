/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Implement an iterator over a binary search tree (BST).
 * Your iterator will be initialized with the root node of a BST.
 * Calling next() will return the next smallest number in the BST.
 *
 * Note:
 * next() and hasNext() should run in average O(1) time and uses O(h) memory,
 * where h is the height of the tree.
 *
 * 创建 next() 和 hasNaxt() 方法，用以从小到大的获取 BST 中的全部元素。
 * 要求两个方法都是 O(1) 的复杂度
 * 实际上，这是一个中序遍历问题，参考 No94.binary-tree-inorder-traversal.js
 * 需要注意的是，next() 和 hasNaxt() 要求 O(1) 的复杂度，且空间占用不能超过 O(h)，h 是树的高度
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
var BSTIterator = function(root) {
  this.queue = []
  if (root) {
    let node = root
    while (node) {
      this.queue.push(node)
      node = node.left
    }
  }
}

/**
* @return the next smallest number
* @return {number}
*/
BSTIterator.prototype.next = function() {
  const node = this.queue.pop()
  let tmp = node.right

  while (tmp) {
    this.queue.push(tmp)
    tmp = tmp.left
  }
  return node.val
};

/**
* @return whether we have a next smallest number
* @return {boolean}
*/
BSTIterator.prototype.hasNext = function() {
  return this.queue.length > 0
}

/** 
* Your BSTIterator object will be instantiated and called as such:
* var obj = new BSTIterator(root)
* var param_1 = obj.next()
* var param_2 = obj.hasNext()
*/
