=begin
Difficulty:
Medium

Desc:
Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target?
Find all unique quadruplets in the array which gives the sum of target.

Note:
The solution set must not contain duplicate quadruplets.

Example:
Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
=end

def three_sum(nums, start, target, pre_num)
  results = []
  index = start

  while index < nums.size - 2 do
    num = nums[index]

    if index > start && num == nums[index -1] then
      index += 1
      next
    end

    i = index + 1
    j = nums.size - 1

    while i < j do
      sum = nums[i] + nums[j] + num
      if sum > target then
        j -= 1
        while i < j && nums[j] == nums[j + 1] do
          j -= 1
        end
      elsif sum < target then
        i += 1
        while i < j && nums[i] == nums[i - 1] do
          i += 1
        end
      else
        results.push([pre_num, num, nums[i], nums[j]])
        i += 1
        j -= 1

        while i < j && nums[i] == nums[i - 1] do
          i += 1
        end
        while i < j && nums[j] == nums[j + 1] do
          j -= 1
        end
      end
    end

    index += 1
  end

  return results
end

# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[][]}
def four_sum(nums, target)
  nums.sort!
  results = []

  i = 0
  while i < nums.size - 3 do
    num = nums[i]
    if i == 0 || num != nums[i - 1] then
      results += three_sum(nums, i + 1, target - num, num)
    end
    i += 1
  end

  return results
end

# Test case
print four_sum([1, 0, -1, 0, -2, 2], 0)
print four_sum([0,0,0,0], 0)
print four_sum([-3,-2,-1,0,0,1,2,3], 0) # [[-3, -2, 2, 3], [-3, -1, 1, 3], [-3, 0, 0, 3], [-3, 0, 1, 2], [-2, -1, 0, 3], [-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
print four_sum([1,-2,-5,-4,-3,3,3,5], -11) # [[-5,-4,-3,1]]
print four_sum([-1,0,1,2,-1,-4], -1)
