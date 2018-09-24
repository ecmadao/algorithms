=begin
Difficulty:
Hard

Desc:
Given an unsorted integer array, find the smallest missing positive integer.

Example:
Input: [1,2,0]
Output: 3

Input: [3,4,-1,1]
Output: 2

Input: [7,8,9,11,12]
Output: 1
=end

require 'set'

# @param {Integer[]} nums
# @return {Integer}
def first_missing_positive(nums)
  set = Set.new(nums)
  i = 1
  while true do
    return i unless set.include?(i)
    i += 1
  end
end
