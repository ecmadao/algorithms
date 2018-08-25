=begin
Difficulty:
Medium

Desc:
Given a linked list, swap every two adjacent nodes and return its head.

Example:
Given 1->2->3->4, you should return the list as 2->1->4->3.

Note:
Your algorithm should use only constant extra space.
You may not modify the values in the list's nodes, only nodes itself may be changed.
=end

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {ListNode}
def swap_pairs(head)
  return nil unless head != nil
  node1 = head
  node2 = head.next
  result = nil
  pre = nil

  while node1 && node2 do
    tmp = node2.next
    node1.next = tmp
    node2.next = node1

    if result == nil then
      result = node2
    end

    if pre != nil then
      pre.next = node2
    end

    pre = node1
    node1 = tmp
    node2 = tmp ? tmp.next : nil
  end
  return result || head
end
