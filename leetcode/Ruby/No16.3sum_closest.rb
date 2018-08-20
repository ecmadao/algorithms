=begin
Difficulty:
Medium

Desc:
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target.
Return the sum of the three integers.
You may assume that each input would have exactly one solution.

Example:
Given array nums = [-1, 2, 1, -4], and target = 1.
The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
=end

# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def three_sum_closest(nums, target)
  nums.sort!
  result = nums[0] + nums[1] + nums[2]
  return result unless result != target

  nums.each_with_index { |num, index|
    i = index + 1
    j = nums.size - 1
    while i < j do
      sum = num + nums[i] + nums[j]
      if (target - sum).abs < (target - result).abs then
        result = sum
      end
      if sum > target then
        j -= 1
        while j > i && nums[j] == nums[j + 1] do
          j -= 1
        end
      elsif sum < target then
        i += 1
        while j > i && nums[i] == nums[i - 1] do
          i += 1
        end
      else
        return result
      end
    end
  }
  return result
end

# Test case
puts three_sum_closest([-1, 2, 1, -4], 1)
puts three_sum_closest([-1, 2, 1, -4], 2)
puts three_sum_closest([-1, 2, 1, -4], -3)
