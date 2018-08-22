=begin
Difficulty:
Hard

Desc:
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:
Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
=end

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def merge_two_lists(l1, l2)
  head = ListNode.new(nil)
  list = head

  while l1 && l2 do
    if l1.val < l2.val then
      list.next = ListNode.new(l1.val)
      l1 = l1.next
    else
      list.next = ListNode.new(l2.val)
      l2 = l2.next
    end
    list = list.next
  end
  list.next = l1 || l2
  return head.next
end

# @param {ListNode[]} lists
# @return {ListNode}
def merge_k_lists(lists)
  while lists.size > 1 do
    lists.push(merge_two_lists(lists.shift, lists.shift))
  end
  return lists[0]
end
