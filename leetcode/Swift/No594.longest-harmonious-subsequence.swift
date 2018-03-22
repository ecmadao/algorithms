/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * We define a harmonious array is an array where the difference between its maximum value and its minimum value is exactly 1.
 * Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.
 *
 * Example:
 * Input: [1,3,2,2,5,2,3,7]
 * Output: 5
 * Explanation: The longest harmonious subsequence is [3,2,2,2,3].
 *
 * 给出一个数组，求最长子序列，该序列的最大值和最小值之差为1
 */

class Solution {
    func findLHS(_ nums: [Int]) -> Int {
        var dict = [Int:Int]()

        for num in nums {
            let count = dict[num, default: 0]
            dict[num] = count + 1
        }

        var result = 0
        var preKey: Int? = nil
        for key in dict.keys.sorted() {
            if let pre = preKey {
                if key - pre == 1 {
                    result = max(result, dict[key]! + dict[pre]!)
                }
            }
            preKey = key
        }
        return result
    }
}