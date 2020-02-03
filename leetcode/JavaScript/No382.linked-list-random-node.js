/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability of being chosen.
 * 
 * Follow up:
 * What if the linked list is extremely large and its length is unknown to you? Could you solve this efficiently without using extra space?
 * 
 * Example:
 * // Init a singly linked list [1,2,3].
 * ListNode head = new ListNode(1);
 * head.next = new ListNode(2);
 * head.next.next = new ListNode(3);
 * Solution solution = new Solution(head);
 * // getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.
 * solution.getRandom();
 * 
 * 给定一个单链表，随机选择链表的一个节点，并返回相应的节点值。保证每个节点被选的概率一样。
 * 进阶:
 * 如果链表十分大且长度未知，如何解决这个问题？你能否使用常数级空间复杂度实现？
 * 
 * 要求 O(n) 的空间复杂度，属于蓄水池抽样问题
 * https://zh.wikipedia.org/wiki/水塘抽樣
 * https://zhuanlan.zhihu.com/p/41348264
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {
  this.head = head
}

/**
* Returns a random node's value.
* @return {number}
*
* 蓄水池抽样法
* https://leetcode-cn.com/problems/linked-list-random-node/solution/xu-shui-chi-chou-yang-suan-fa-by-jason-2/
*/
Solution.prototype.getRandom = function() {
  let count = 2
  let node = this.head
  let result = node

  while (node && node.next) {
    node = node.next
    const random = Math.floor(Math.random() * count)
    if (random < 1) result = node

    count += 1
  }

  return result.val
}

/** 
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(head)
* var param_1 = obj.getRandom()
*/