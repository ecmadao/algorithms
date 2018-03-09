/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Reverse digits of an integer.
 *
 * Example:
 * Example1: x = 123, return 321
 * Example2: x = -123, return -321
 *
 * Note:
 * The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
 *
 * 反转数字，注意处理正负号和最大/最小值边界问题
 */

class Solution {
    func reverse(_ x: Int) -> Int {
        var result = 0
        var x = x

        while x != 0 {
            result = result * 10 + x % 10
            x = x / 10
            if x < 0 && Int(Int32.min) / 10 > result { return 0 }
            if x > 0 && Int(Int32.max) / 10 < result { return 0 }
        }
        return result
    }
}
