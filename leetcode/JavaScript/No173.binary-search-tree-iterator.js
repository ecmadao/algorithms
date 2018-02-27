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
 */

/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var inorderTraversal = function(root) {
  var result = [];
  if (!root) return result;
  if (root.left) {
    result.push(...inorderTraversal(root.left));
  }
  result.push(root.val);
  if (root.right) {
    result.push(...inorderTraversal(root.right));
  }
  return result;
};

/**
* @constructor
* @param {TreeNode} root - root of the binary search tree
*/
var BSTIterator = function(root) {
  this.datas = inorderTraversal(root);
};


/**
* @this BSTIterator
* @returns {boolean} - whether we have a next smallest number
*/
BSTIterator.prototype.hasNext = function() {
  return this.datas.length > 0;
};

/**
* @this BSTIterator
* @returns {number} - the next smallest number
*/
BSTIterator.prototype.next = function() {
  return this.datas.shift();
};

/**
* Your BSTIterator will be called like this:
* var i = new BSTIterator(root), a = [];
* while (i.hasNext()) a.push(i.next());
*/