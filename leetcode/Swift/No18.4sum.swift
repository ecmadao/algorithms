/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target?
 * Find all unique quadruplets in the array which gives the sum of target.
 *
 * Note:
 * The solution set must not contain duplicate quadruplets.
 *
 * Example:
 * given array S = [1, 0, -1, 0, -2, 2], and target = 0.
 * A solution set is:
 * [
 *    [-1,  0, 0, 1],
 *    [-2, -1, 1, 2],
 *    [-2,  0, 0, 2]
 * ]
 *
 * 四数求和，类似于之前的三数求和，只是注意处理重复值的问题
 */

class Solution {
    func fourSum(_ nums: [Int], _ target: Int) -> [[Int]] {
        let sortedNums = nums.sorted()
        var result = [[Int]]()

        for (index, num) in sortedNums.enumerated() {
            if index > 0 && num == sortedNums[index - 1] {
                continue
            }

            var secIndex = index + 1
            while secIndex < sortedNums.count {
                if secIndex > index + 1 && sortedNums[secIndex] == sortedNums[secIndex - 1] {
                    secIndex += 1
                    continue
                }

                var thirdIndex = secIndex + 1
                var lastIndex = sortedNums.count - 1
                while thirdIndex < lastIndex {
                    let sum = num + sortedNums[secIndex] + sortedNums[thirdIndex] + sortedNums[lastIndex]
                    if sum == target {
                        result.append([num, sortedNums[secIndex], sortedNums[thirdIndex], sortedNums[lastIndex]])
                        while thirdIndex < lastIndex && sortedNums[thirdIndex] == sortedNums[thirdIndex + 1] {
                            thirdIndex += 1
                        }
                        while thirdIndex < lastIndex && sortedNums[lastIndex] == sortedNums[lastIndex - 1] {
                            lastIndex -= 1
                        }
                        thirdIndex += 1
                        lastIndex -= 1
                    } else if sum > target {
                        lastIndex -= 1
                    } else {
                        thirdIndex += 1
                    }
                }
                secIndex += 1
            }
        }
        return result
    }
}
