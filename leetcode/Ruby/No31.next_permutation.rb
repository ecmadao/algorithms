=begin
Difficulty:
Medium

Desc:
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
The replacement must be in-place and use only constant extra memory.
Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

首先要理解什么是全排列，什么是字典序法排列

全排列：
数组内元素的所有可能排列，比如一个数组 [1, 2, 3]，其全排列为
[1, 2, 3], [1, 3, 2], [3, 2, 1], [3, 1, 2], [2, 1, 3], [2, 3, 1]
字典序法排列：
对于由数字组成的排列来说，就是按照从小到大的顺序排列
[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]
可以看到，每个位置上的数字都是从小到大依次增大

回过头来看看题目，它要求写出给出排列的按照字典顺序的下一个全排列，且如果已经是最后一个排列，则从头开始
可以通过字典顺序全排列的定义推理出，如果一个排列是全排列的最后一个排列，那么它里面的元素一定是按照从大到小的顺序排列的，
比如上面的 [3, 2, 1]
因此，我们可以从数组的末位开始向前遍历：
1. 如果每一位都是已遍历元素中最大的，则一定是全排列的最后一位，那么原地反转数组即可；
2. 如果当前位的数值小于不是最大的，比如 [1, 2, 3, 5, 4]，遍历到 3 时，小于最大值 5，
我们可以知道，3 前面的排列是稳定的，只要从已遍历过的数中（5，4）选出最接近 3 的数，两者交换位置，
然后再对数组中当前索引之后的元素进行一个从小到大的快排，就能获取到下一个全排列
（因为 3 之前的数全部按照从大到小排列，所以已经是最大排列，此时只能改变 3 位置上的数值；而要求是下一个全排列，则只能选出最接近 3 的数）
=end

def exchange_closest(nums, start)
  tmp = start + 1
  i = start + 2
  while i < nums.size do
    if nums[i] <= nums[start] then
      break
    end
    if nums[i] - nums[start] < nums[tmp] - nums[start] then
      tmp = i
    end
    i += 1
  end
  val = nums[start]
  nums[start] = nums[tmp]
  nums[tmp] = val
end

# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def next_permutation(nums)
  index = nums.size - 1
  tmp_max = nums[index]
  index -= 1
  changed = false

  while index >= 0 do
    num = nums[index]
    if num < tmp_max then
      exchange_closest(nums, index)
      nums[(index + 1)...nums.size] = nums[(index + 1)...nums.size].sort
      changed = true
      break
    else
      tmp_max = num
    end
    index -= 1
  end

  if !changed then
    nums.sort!
  end
end
