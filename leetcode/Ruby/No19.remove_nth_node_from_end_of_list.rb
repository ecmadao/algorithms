=begin
Difficulty:
Medium

Desc:
Given a linked list, remove the n-th node from the end of list and return its head.

Example:
Given linked list: 1->2->3->4->5, and n = 2.
After removing the second node from the end, the linked list becomes 1->2->3->5.

Note:
Given n will always be valid.

Follow up:
Could you do this in one pass?
=end

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

=begin
# @param {ListNode} head
# @param {Integer} n
# @return {ListNode}
def remove_nth_from_start(head, n)
  node = head
  return node.next unless n > 1
  1.upto(n - 2) do |i|
    node = node.next
  end
  node.next = node.next.next
  return head
end
=end

# @param {ListNode} head
# @param {Integer} n
# @return {ListNode}
def remove_nth_from_end_1(head, n)
  node = head
  count = 1
  while node.next do
    count += 1
    node = node.next
  end
  node = head

  n = count - n + 1
  return node.next unless n > 1
  1.upto(n - 2) do |i|
    node = node.next
  end
  node.next = node.next.next
  return head
end

# @param {ListNode} head
# @param {Integer} n
# @return {ListNode}
def remove_nth_from_end_2(head, n)
  node1 = nil
  node2 = head

  1.upto(n - 1) do |_|
    node2 = node2.next
  end

  while node2.next do
    node2 = node2.next
    if node1 == nil then
      node1 = head
    else
      node1 = node1.next
    end
  end

  return head.next unless node1 != nil

  node1.next = node1.next.next
  return head
end