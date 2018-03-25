/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a linked list, swap every two adjacent nodes and return its head.
 *
 * Example:
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 *
 * Note:
 * Your algorithm should use only constant space.
 * You may not modify the values in the list, only nodes itself can be changed.
 *
 * 反转给出的链表。不能修改节点的值
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
    func swapPairs(_ head: ListNode?) -> ListNode? {
        var head = head
        var node = head
        var pre: ListNode? = nil

        while node != nil && node!.next != nil {
            let cur = node!.next!
            let tmp = cur.next

            if pre == nil {
                head = cur
            } else {
                pre!.next = cur
            }

            cur.next = node
            node!.next = tmp

            pre = node
            node = tmp
        }
        return head
    }
}
