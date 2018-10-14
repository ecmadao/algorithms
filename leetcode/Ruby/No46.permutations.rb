=begin
Difficulty:
Medium

Desc:
Given a collection of distinct integers, return all possible permutations.

Example:
Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
=end

# @param {Integer[]} nums
# @return {Integer[][]}
def permute(nums)
  return [nums] unless nums.size > 1
  results = []

  nums.each_with_index do |num, index|
    arrays = permute(nums[0...index] + nums[index + 1...nums.size])
    arrays.each do |arr|
      results.push([num] + arr)
    end
  end
  return results
end
