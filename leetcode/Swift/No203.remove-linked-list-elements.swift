/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Remove all elements from a linked list of integers that have value val.
 *
 * Example:
 * Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
 * Return: 1 --> 2 --> 3 --> 4 --> 5
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
    func removeElements(_ head: ListNode?, _ val: Int) -> ListNode? {
        guard head != nil else {
            return nil
        }

        var result = head
        var node = head
        var pre: ListNode? = nil

        while node != nil {
            if node!.val == val {
                if pre == nil {
                    result = node!.next
                } else {
                    pre!.next = node!.next
                }
            } else {
                pre = node
            }
            node = node!.next
        }

        return result
    }
}
