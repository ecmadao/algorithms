/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array and a value, remove all instances of that value in place and return the new length.
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 *
 * Example:
 * Given input array nums = [3,2,2,3], val = 3
 * Your function should return length = 2, with the first two elements of nums being 2.
 *
 * 给一个数组和目标值，在原数组中直接删除和目标值相等的元素
 */

 class Solution {
    func removeElement(_ nums: inout [Int], _ val: Int) -> Int {
        var index = 0
        while index < nums.count {
            if nums[index] == val {
                nums[index] = nums[nums.count - 1]
                nums.removeLast()
            } else {
                index += 1
            }
        }
        return nums.count
    }
}
