=begin
Difficulty:
Medium

Desc:
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:
Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
=end

require 'set'

# @param {Integer[]} nums
# @return {Integer[][]}
def permute(nums)
  return [nums] unless nums.size > 1
  cache = Set.new([])
  results = []

  nums.each_with_index do |num, index|
    if cache.include?(num) then
      next
    end
    cache.add(num)
    arrays = permute(nums[0...index] + nums[index + 1...nums.size])
    arrays.each do |arr|
      results.push([num] + arr)
    end
  end
  return results
end

# @param {Integer[]} nums
# @return {Integer[][]}
def permute_unique(nums)
  return permute(nums)
end
