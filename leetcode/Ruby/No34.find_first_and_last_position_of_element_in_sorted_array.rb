=begin
Difficulty:
Medium

Desc:
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
Your algorithm's runtime complexity must be in the order of O(log n).
If the target is not found in the array, return [-1, -1].

Example:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
=end

# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def search_range(nums, target)
  if nums.size == 0 || nums[0] > target || nums[-1] < target then
    return [-1, -1]
  end

  from = 0
  to = nums.size - 1

  while from <= to do
    mid = (from + to) / 2
    if nums[mid] == target then
      min = mid - 1
      max = mid + 1
      while (min >= 0 && nums[min] == target) || (max < nums.size && nums[max] == target) do
        if min >= 0 && nums[min] == target then
          min -= 1
        end
        if max < nums.size && nums[max] == target then
          max += 1
        end
      end
      return [min + 1, max - 1]
    elsif nums[mid] > target then
      to = mid - 1
    else
      from = mid + 1
    end
  end

  return [-1, -1]
end

print search_range([5,7,7,8,8,10], 8)
print search_range([5,7,7,8,8,10], 6)
print search_range([1, 1], 1)
