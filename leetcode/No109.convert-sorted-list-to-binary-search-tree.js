/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a singly linked list where elements are sorted in ascending order,
 * convert it to a height balanced BST.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var sortedArrayToBST = function(nums) {
  if (!nums.length) return null;
  const midIndex = Math.ceil(nums.length / 2) - 1;
  const root = new TreeNode(nums[midIndex]);
  root.left = sortedArrayToBST(nums.slice(0, midIndex));
  root.right = sortedArrayToBST(nums.slice(midIndex + 1));
  return root;
};

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  const nums = [];
  while (head) {
    nums.push(head.val);
    head = head.next;
  }
  return sortedArrayToBST(nums);
};
