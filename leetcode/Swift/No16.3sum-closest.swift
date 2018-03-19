/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. 
 * Return the sum of the three integers. You may assume that each input would have exactly one solution.
 *
 * Example:
 * given array S = {-1 2 1 -4}, and target = 1.
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 *
 * 跟 3Sum 类似，只是要求求出最接近于指定数的和
 */

class Solution {
    func threeSumClosest(_ nums: [Int], _ target: Int) -> Int {
        let sortedNums = nums.sorted()
        var result = nums[0] + nums[1] + nums[2]
        var diff = abs(result - target)

        for (index, num) in sortedNums.enumerated() {
            var start = index + 1
            var end = sortedNums.count - 1

            while start < end {
                var sum = num + sortedNums[start] + sortedNums[end];
                if sum == target {
                    return target
                } else {
                    if (abs(sum - target) < diff) {
                        diff = abs(sum - target)
                        result = sum
                    }
                    diff = min(diff, abs(sum - target))
                    if sum > target {
                        end -= 1
                    } else {
                        start += 1
                    }
                }
            }
        }

        return result
    }
}
