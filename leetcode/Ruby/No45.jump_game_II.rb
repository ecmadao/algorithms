=begin
Difficulty:
Hard

Desc:
Given an array of non-negative integers, you are initially positioned at the first index of the array.
Each element in the array represents your maximum jump length at that position.
Your goal is to reach the last index in the minimum number of jumps.

Example:
Input: [2,3,1,1,4]
Output: 2
Explanation:
The minimum number of jumps to reach the last index is 2.
Jump 1 step from index 0 to 1, then 3 steps to the last index.

Note:
You can assume that you can always reach the last index.
=end

# @param {Integer[]} nums
# @return {Integer}
def jump(nums)
  farthest = 0
  start_index = 0
  end_index = 0
  jump_count = 0

  while farthest < nums.size - 1 do
    tmp = farthest
    jump_count += 1
    while start_index <= end_index do
      farthest = [farthest, start_index + nums[start_index]].max
      start_index += 1
    end

    start_index = tmp + 1
    end_index = farthest
  end
  return jump_count
end


def jump(nums)
  farthest = 0
  jump_count = 0
  max = 0

  nums.each_with_index do |num, index|
    return jump_count unless farthest < nums.size - 1

    if index > farthest then
      farthest = max
      jump_count += 1
    end

    max = [max, num + index].max
  end

  return jump_count
end
