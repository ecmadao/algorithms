=begin
Difficulty:
Medium

Desc:
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Example:
Input: [1,8,6,2,5,4,8,3,7]
Output: 49
=end

# @param {Integer[]} height
# @return {Integer}
def max_area(height)
  i = 0
  j = height.size - 1
  max = 0
  while i < j do
    hi = height[i]
    hj = height[j]
    max = [max, (i - j).abs * [hi, hj].min].max
    if hi < hj then
      i += 1
    else
      j -= 1
    end
  end
  return max
end