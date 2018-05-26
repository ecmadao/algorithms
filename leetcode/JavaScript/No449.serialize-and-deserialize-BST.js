/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer,
 * or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
 * Design an algorithm to serialize and deserialize a binary search tree.
 * There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary search tree can be serialized to a string and this string can be deserialized to the original tree structure.
 *
 * The encoded string should be as compact as possible.
 * Note:
 * Do not use class member/global/static variables to store states.
 * Your serialize and deserialize algorithms should be stateless.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) return '[]';
  const queue = [root];
  const result = [root.val];

  while (queue.length) {
    const node = queue.shift();
    result.push(node.left ? node.left.val : null);
    result.push(node.right ? node.right.val : null);

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  while (result[result.length - 1] === null) {
    result.pop();
  }
  return `[${result.join(',')}]`;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  let head = null;
  const values = data.slice(1, -1).split(',');
  if (!values.length || !values[0]) return head;

  head = new TreeNode(Number(values.shift()));
  const nodes = [head];
  let node;

  while (values.length) {
    node = nodes.shift();
    if (!node) continue;
    const left = values.shift();
    const right = values.shift();
    if (left) {
      node.left = new TreeNode(Number(left));
      nodes.push(node.left);
    }
    if (right) {
      node.right = new TreeNode(Number(right));
      nodes.push(node.right);
    }
  }
  return head;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
