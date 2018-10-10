=begin
Difficulty:
Medium

Desc:
Given an array of non-negative integers, you are initially positioned at the first index of the array.
Each element in the array represents your maximum jump length at that position.
Determine if you are able to reach the last index.

Example:
Input: [2,3,1,1,4]
Output: true
Explanation:
Jump 1 step from index 0 to 1, then 3 steps to the last index.

Input: [3,2,1,0,4]
Output: false
Explanation:
You will always arrive at index 3 no matter what.
Its maximum jump length is 0, which makes it impossible to reach the last index.
=end

# @param {Integer[]} nums
# @return {Boolean}
def can_jump(nums)
  last = nums[0]
  nums.each_with_index do |num, index|
    return true unless last < nums.size - 1

    if index <= last then
      if index + num > last then
        last = index + num
      end
    end
  end
  return last >= nums.size - 1
end
