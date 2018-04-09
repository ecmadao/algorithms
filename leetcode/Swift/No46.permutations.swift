/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a collection of distinct numbers, return all possible permutations.
 *
 * Example:
 * [1,2,3] have the following permutations:
 * [
 *    [1,2,3],
 *    [1,3,2],
 *    [2,1,3],
 *    [2,3,1],
 *    [3,1,2],
 *    [3,2,1]
 * ]
 *
 * 求数组内元素的所有排列组合。不必处理数值相同的元素
 * 例如，[1, 1, 2] 的排列组合为 [1, 1, 2], [1, 2, 1], [2, 1, 1]
 */

/*
 * 思路：
 * 1. 将列表中的每一个元素插入到由剩下元素组成的各个全排列列表的头部
 */

class Solution {
    func permute(_ nums: [Int]) -> [[Int]] {
        guard nums.count > 1 else {
            return [[nums[0]]]
        }
        var result = [[Int]]();

        for (index, value) in nums.enumerated() {
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
}
