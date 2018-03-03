/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 *
 * Example:
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 *
 * 简而言之，就是将数字作为链表储存起来，并且是倒序储存。比如 123 储存为 3 -> 2 -> 1
 * 现在两个数字相加，求其和的链表（用数组表示）
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
    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        var result: ListNode! = nil
        var node: ListNode! = nil
        var remainder: Int = 0
        var list1 = l1
        var list2 = l2

        while list1 != nil || list2 != nil {
            let sum = (list1?.val ?? 0) + (list2?.val ?? 0) + remainder
            let num = sum % 10
            remainder = sum / 10

            let newNode = ListNode(num)
            if result == nil {
                result = newNode
                node = newNode
            } else {
                node.next = newNode
                node = newNode
            }

            list1 = list1?.next
            list2 = list2?.next
        }
        if remainder > 0 {
            node.next = ListNode(remainder)
        }
        return result
    }
}
