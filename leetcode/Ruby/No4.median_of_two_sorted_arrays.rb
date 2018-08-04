=begin
Difficulty: Hard

Desc:
There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
You may assume nums1 and nums2 cannot be both empty.

Example:
nums1 = [1, 3]
nums2 = [2]
The median is 2.0

nums1 = [1, 2]
nums2 = [3, 4]
The median is (2 + 3)/2 = 2.5
=end

# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Float}
def find_median_sorted_arrays(nums1, nums2)
  i1 = 0
  i2 = 0
  list = []
  while i1 < nums1.size && i2 < nums2.size do
    num1 = nums1[i1]
    num2 = nums2[i2]
    if num1 < num2 then
      list.push(num1)
      i1 += 1
    else
      list.push(num2)
      i2 += 1
    end
  end
  if i1 < nums1.size then
    list[list.size, 0] = nums1[i1...nums1.size]
  elsif i2 < nums2.size then
    list[list.size, 0] = nums2[i2...nums2.size]
  end
  return 0.0 unless list.size > 0
  mid = list.size / 2
  return list.size % 2 === 0 ? (list[mid] + list[mid - 1]) / 2.0 : list[mid].to_f
end

# Test case
puts find_median_sorted_arrays([], [2,3])
puts find_median_sorted_arrays([], [])
