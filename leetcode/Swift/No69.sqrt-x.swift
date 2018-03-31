/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Implement int sqrt(int x).
 * Compute and return the square root of x.
 *
 * 求最接近 x 的开方的整数（返回的结果的平方要小于等于 x）
 */

class Solution {
    func _mySqrt(min: Int, max: Int, target: Int) -> Int {
        guard min < max else {
            return min
        }
        let center = (min + max + 1) / 2
        if center * center > target {
            return _mySqrt(min: min, max: center - 1, target: target)
        }
        return _mySqrt(min: center, max: max, target: target)
    }

    func mySqrt(_ x: Int) -> Int {
        return _mySqrt(min: 0, max: x, target: x)
    }
}
