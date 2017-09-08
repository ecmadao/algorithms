/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Merge two sorted linked lists and return it as a new list.
 * The new list should be made by splicing together the nodes of the first two lists.
 *
 * 合并两个已经排好序的数组
 * 运用链表即可
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


var insert = function(node, val, parent) {
  var newNode;
  if (!node) {
    newNode = new ListNode(val);
    if (parent) parent.next = newNode;
    return newNode;
  }
  if (node.val < val) {
    insert(node.next, val, node);
  } else {
    newNode = new ListNode(val);
    newNode.next = node;

    if (!parent) return newNode;
    parent.next = newNode;
  }
}

/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var mergeTwoLists = function(l1, l2) {
  var result = null;
  var insertResult = null;
  while(l1 || l2) {
    if (l1) {
      insertResult = insert(result, l1.val);
      result = insertResult || result;
      l1 = l1.next;
    }
    if (l2) {
      insertResult = insert(result, l2.val);
      result = insertResult || result;
      l2 = l2.next;
    }
  }
  return result;
};