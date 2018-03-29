/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
 * k is a positive integer and is less than or equal to the length of the linked list.
 * If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
 * You may not alter the values in the nodes, only nodes itself may be changed.
 * Only constant memory is allowed.
 *
 * Example:
 * Given this linked list: 1->2->3->4->5
 * For k = 2, you should return: 2->1->4->3->5
 * For k = 3, you should return: 3->2->1->4->5
 *
 * 依旧是反转链表，但是跟 24 题相比，反转的元素数目不确定，每 k 个链表段进行反转，小于 k 则不反转
 */

/*
 * 思路：
 * 将链表按照 k 的长度进行切片，每个链表片段都进行反转，最后再合并
 *
 * 例如：
 * list: 1->2->3->4->5, k: 3
 * 则分为 1->2->3 和 4->5
 * 反转为 3->2->1 和 4->5（小于 k 的链表段不反转）
 * 然后合并 3->2->1->4->5
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
    func reverseList(_ list: ListNode, _ step: Int) -> ListNode {
        var node = list
        var pre: ListNode? = nil
        var step = step

        while step > 1 {
            let tmp = node.next!
            node.next = pre
            pre = node
            node = tmp
            step -= 1
        }
        node.next = pre
        return node
    }

    func reverseKGroup(_ head: ListNode?, _ k: Int) -> ListNode? {
        guard k > 1, head != nil else {
            return head
        }

        var step = 1
        var node = head
        var point = head
        var pre: ListNode? = nil
        var result: ListNode? = nil

        while point != nil {
            point = point!.next
            if step == k {
                let newHead = reverseList(node!, k)
                if pre != nil {
                    pre!.next = newHead
                } else {
                    result = newHead
                }
                pre = node
                pre!.next = point
                node = point
                step = 0
            }
            step += 1
        }
        if result == nil {
            result = head
        }
        return result
    }
}
