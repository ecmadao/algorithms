/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * Merge k sorted linked lists and return it as one sorted list.
 * Analyze and describe its complexity.
 *
 * 将 k 个已排好序的链表合并。注意优化其复杂度
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

   /*
    * ==================== Solution 1 ====================
    * Time out error
    */
    func mergeKLists_Timeout(_ lists: [ListNode?]) -> ListNode? {
        guard lists.count > 0 else {
            return nil
        }

        var result = lists[0]
        for i in 1..<lists.count {
            result = mergeTwoLists(result, lists[i])
        }
        return result
    }

    /*
    * ==================== Solution 2 ====================
    * Pass
    */
    func mergeKLists(_ lists: [ListNode?]) -> ListNode? {
        guard lists.count > 0 else {
            return nil
        }

        var left = 0
        var right = lists.count - 1
        var lists = lists

        while right > 0 {
            left = 0
            while left < right {
                lists[left] = mergeTwoLists(lists[left], lists[right])
                left += 1
                right -= 1
            }
        }
        return lists[0]
    }
}
