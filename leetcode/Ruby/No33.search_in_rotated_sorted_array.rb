=begin
Difficulty:
Medium

Desc:
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
You are given a target value to search. If found in the array return its index, otherwise return -1.
You may assume no duplicate exists in the array.
Your algorithm's runtime complexity must be in the order of O(log n).

Example:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
=end

# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search(nums, target)
  left = 0
  right = nums.size - 1

  while left <= right do
    mid = (right + left) / 2
    mid_num = nums[mid]
    right_num = nums[right]
    left_num = nums[left]

    return mid unless mid_num != target

    if mid_num > right_num then
      if target < mid_num && target >= left_num then
        right -= 1
      else
        left += 1
      end
    else
      if target > mid_num && target <= right_num then
        left += 1
      else
        right -= 1
      end
    end
  end

  return -1
end