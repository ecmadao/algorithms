/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1]
*/

class Solution {
    func twoSum_loop(_ nums: [Int], _ target: Int) -> [Int] {
        var startIndex = nums.startIndex

        while startIndex < nums.endIndex - 1 {
            var endIndex = startIndex + 1
            while endIndex <= nums.endIndex - 1 {
                if nums[startIndex] + nums[endIndex] == target {
                    return [startIndex, endIndex]
                } else {
                    endIndex += 1
                }
            }
            startIndex += 1
        }
        return [Int]()
    }

    func twoSum_hashtable(_ nums: [Int], _ target: Int) -> [Int] {
        var dict = Dictionary<Int, Array<Int>>()
        for (index, value) in nums.enumerated() {
            var arr = dict[value, default: []]
            arr.append(index)
            dict[value] = arr
        }
        for (index, value) in nums.enumerated() {
            var remainder = target - value
            guard let arr = dict[remainder] else {
                continue
            }
            let result = arr.filter { i in i != index }
            if result.count > 0 {
                return [index, result[0]]
            }
        }
        return [Int]()
    }
}

