=begin
Difficulty:
Medium

Desc:
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
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
def add_two_numbers(l1, l2)
  carry = 0
  head = nil
  cur = nil
  while l1 || l2
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    carry = sum.div(10)
    val = sum % 10
    node = ListNode.new(val)
    if !head
      head = node
      cur = head
    else
      cur.next = node
      cur = node
    end
    if l1
      l1 = l1.next
    end
    if l2
      l2 = l2.next
    end
  end

  if carry != 0
    cur.next = ListNode.new(carry)
  end

  return head
end
