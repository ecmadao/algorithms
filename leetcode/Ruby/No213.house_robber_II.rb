=begin
Difficulty:
Medium

Desc:
You are a professional robber planning to rob houses along a street.
Each house has a certain amount of money stashed.
All houses at this place are arranged in a circle.
That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Example:
Input: [2,3,2]
Output: 3
Explanation:
You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

Input: [1,2,3,1]
Output: 4
Explanation:
Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4.
=end

def robbing(nums, from, to, unrobbed, robbed)
  from.upto(to).each do |index|
    num = nums[index]
    tmp = robbed
    robbed = unrobbed + num
    unrobbed = [unrobbed, tmp].max
  end
  return [robbed, unrobbed].max
end

# @param {Integer[]} nums
# @return {Integer}
def rob(nums)
  return 0 unless nums.length > 0
  return nums.max unless nums.length > 2
  return [robbing(nums, 0, nums.size - 2, 0, 0), robbing(nums, 1, nums.size - 1, 0, 0)].max
end

# Test case
puts rob([1,2,3,1]) # 4
puts rob([2,3,2]) # 3
puts rob([2,3]) # 3
puts rob([2]) # 2
