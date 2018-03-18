/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 *
 * Note:
 * The solution set must not contain duplicate triplets.
 *
 * Example:
 * given array S = [-1, 0, 1, 2, -1, -4],
 * A solution set is:
 * [
 *  [-1, 0, 1],
 *  [-1, -1, 2]
 * ]
 *
 * 从数组中选出可以满足三个数之和为 0 的所有元素（以数组形式），数组不能重复（只是元素顺序不同也不行）
 */

class Solution {
    func threeSum(_ nums: [Int]) -> [[Int]] {
        let sortedNums = nums.sorted()
        var result = [[Int]]()

        for (index, num) in sortedNums.enumerated() {
            var start = index + 1
            var end = sortedNums.count - 1
            if index > 0 && num == sortedNums[index - 1] {
                continue
            }
            while start < end {
                let total = num + sortedNums[start] + sortedNums[end]
                if total > 0 {
                    end -= 1
                } else if total < 0 {
                    start += 1
                } else {
                    result.append([num, sortedNums[start], sortedNums[end]])
                    while start < end && sortedNums[start] == sortedNums[start + 1] {
                        start += 1
                    }
                    while end > start && sortedNums[end] == sortedNums[end - 1] {
                        end -= 1
                    }
                    start += 1
                    end -= 1
                }
            }
        }
        return result
    }
}
