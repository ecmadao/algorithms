/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a binary tree, find the maximum path sum.
 * For this problem,
 * a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections.
 * The path must contain at least one node and does not need to go through the root.
 *
 * Example:
 * Given the below binary tree,
       1
      / \
     2   3
 * Return 6.
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
var maxPathSum = function(root) {
  if (!root) return 0;
  let maxSum = null;
  const getTreeMaxSum = (tree) => {
    if (!tree) return null;
    if (!tree.left && !tree.right) return tree.val;

    const leftMax = getTreeMaxSum(tree.left);
    const rightMax = getTreeMaxSum(tree.right);
    const leftSum = leftMax === null ? 0 : leftMax;
    const rightSum = rightMax === null ? 0 : rightMax;

    const sum = Math.max(leftSum + tree.val, rightSum + tree.val, tree.val);

    if (maxSum === null || sum > maxSum) maxSum = sum;
    if (leftSum + rightSum + tree.val > maxSum) maxSum = leftSum + rightSum + tree.val;
    if (leftMax !== null && maxSum < leftMax) maxSum = leftMax;
    if (rightMax !== null && maxSum < rightMax) maxSum = rightMax;
    return sum;
  };
  const rootVal = root.val;
  const rootLeftVal = getTreeMaxSum(root.left);
  const rootRightVal = getTreeMaxSum(root.right);
  const rootLeftSum = rootLeftVal === null ? 0 : rootLeftVal;
  const rootRightSum = rootRightVal === null ? 0 : rootRightVal;

  console.log(`maxSum: ${maxSum}`);
  console.log(`rootVal: ${rootVal}`);
  console.log(`rootLeftVal: ${rootLeftVal}`);
  console.log(`rootRightVal: ${rootRightVal}`);
  console.log(`rootVal + rootLeftSum: ${rootVal + rootLeftSum}`);
  console.log(`rootVal + rootRightSum: ${rootVal + rootRightSum}`);
  console.log(`rootVal + rootLeftSum + rootRightSum: ${rootVal + rootLeftSum + rootRightSum}`);

  const results = [rootVal, rootVal + rootLeftSum + rootRightSum];
  if (maxSum !== null) results.push(maxSum);
  if (rootLeftVal !== null) results.push(rootLeftVal, rootVal + rootLeftVal);
  if (rootRightVal !== null) results.push(rootRightVal, rootVal + rootRightVal);
  return Math.max(...results);
};
