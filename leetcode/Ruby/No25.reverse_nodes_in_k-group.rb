=begin
Difficulty:
Hard

Desc:
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
k is a positive integer and is less than or equal to the length of the linked list.
If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

Example:
Given this linked list: 1->2->3->4->5
For k = 2, you should return: 2->1->4->3->5
For k = 3, you should return: 3->2->1->4->5

Note:
- Only constant extra memory is allowed.
- You may not alter the values in the list's nodes, only nodes itself may be changed.
=end

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

def reverse_link(head, k)
  i = 1
  tail = head
  header = head

  while i <= k && head != nil do
    tmp = head.next

    head.next = header
    tail.next = tmp

    header = head

    head = tmp
    i += 1
  end

  return { "header" => header, "tail" => tail }
end

# @param {ListNode} head
# @param {Integer} k
# @return {ListNode}
def reverse_k_group(head, k)
  return head unless k > 1

  header = head
  new_head = nil
  pre_tail = nil

  while header != nil do

    next_node = header.next
    i = 2

    while i < k && next_node != nil do
      next_node = next_node.next
      i += 1
    end

    if i < k || next_node == nil then
      break
    end

    next_head = next_node.next

    tmp = reverse_link(header, k)
    if pre_tail != nil then
      pre_tail.next = tmp["header"]
    end
    pre_tail = tmp["tail"]

    if new_head == nil then
      new_head = tmp["header"]
    end

    header = next_head
  end

  return new_head || head
end
