/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a collection of numbers that might contain duplicates, return all possible unique permutations.
 *
 * Example:
 * [1,1,2] have the following unique permutations:
 * [
 *    [1,1,2],
 *    [1,2,1],
 *    [2,1,1]
 * ]
 *
 * 还是排列组合，但是数组内可能会有重复的数字。
 */

 /*
 * 思路：
 * 1. 将列表中的每一个元素插入到由剩下元素组成的各个全排列列表的头部
 * 2. 利用 set 避免重复遍历
 */

class Solution {
    func permute(_ nums: [Int]) -> [[Int]] {
        guard nums.count > 1 else {
            return [[nums[0]]]
        }
        var tmp = Set<Int>();
        var result = [[Int]]();

        for (index, value) in nums.enumerated() {
            if tmp.contains(value) {
                continue
            }
            tmp.insert(value)
            var tmp = nums[0..<index]
            tmp.append(contentsOf: nums[(index + 1)...])
            let arrs = permute(Array(tmp));

            for arr in arrs {
                var arr = arr
                arr.insert(value, at: 0)
                result.append(arr)
            }
        }
        return result
    }

    func permuteUnique(_ nums: [Int]) -> [[Int]] {
        return permute(nums)
    }
}