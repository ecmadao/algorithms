/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a linked list, remove the nth node from the end of list and return its head.
 *
 * Example:
 * Given linked list: 1->2->3->4->5, and n = 2.
 * After removing the second node from the end, the linked list becomes 1->2->3->5.
 *
 * Note:
 * Given n will always be valid.
 * Try to do this in one pass.
 *
 * 给出一个链表，删除倒数第 n 位的元素
 */

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.next = nil
 *     }
 * }
 */
class Solution {
    func removeNthFromEnd(_ head: ListNode?, _ n: Int) -> ListNode? {
        guard let node = head, n > 0 else {
            return nil
        }
        var listNode = node
        var slowNode = node
        var fastIndex = 0
        var slowIndex = 0

        while listNode.next != nil {
            if fastIndex >= n {
                slowIndex += 1
                slowNode = slowNode.next!
            }
            fastIndex += 1
            listNode = listNode.next!
        }
        if n == fastIndex + 1 {
            return slowNode.next
        }
        slowNode.next = slowNode.next?.next
        return node
    }
}
