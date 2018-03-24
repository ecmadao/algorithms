/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Merge two sorted linked lists and return it as a new list.
 * The new list should be made by splicing together the nodes of the first two lists.
 *
 * 合并两个已经排好序的数组
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
    func mergeTwoLists(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        var list1 = l1
        var list2 = l2

        let head: ListNode = ListNode(0)
        var tmp = head
        while list1 != nil && list2 != nil {
            let v1 = list1!.val
            let v2 = list2!.val

            if v1 > v2 {
                tmp.next = list2!
                list2 = list2?.next
            } else {
                tmp.next = list1!
                list1 = list1?.next
            }
            tmp = tmp.next!
        }
        tmp.next = list1 ?? list2
        return head.next
    }
}
