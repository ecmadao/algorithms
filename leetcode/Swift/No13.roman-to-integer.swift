/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a roman numeral, convert it to an integer.
 * Input is guaranteed to be within the range from 1 to 3999.
 *
 * Example:
 * roman -> MMMCCCXXXIII
 * num -> 3333
 *
 * 罗马数字 Wiki: https://zh.wikipedia.org/wiki/%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97
 * I -> 1
 * II -> 2
 * III -> 3
 * IV -> 4
 * V -> 5
 * VI -> 6
 * VII -> 7
 * VIII -> 8
 * IX -> 9
 * X -> 10
 * L -> 50
 * C -> 100
 * D -> 500
 * M -> 1000
 *
 * 与第 12 题倒过来了，由罗马数字求出 int
 * 比较简单，只要找出罗马数字的规律即可：
 * 从末尾（右端）向左遍历，各个数字的左侧的罗马字母的值，如果小于当前数字，则需要做减法，否则做加法
 */

enum Roman: String {
    case I
    case V
    case X
    case L
    case C
    case D
    case M

    var num: Int {
        switch self {
        case .I:
            return 1
        case .V:
            return 5
        case .X:
            return 10
        case .L:
            return 50
        case .C:
            return 100
        case .D:
            return 500
        case .M:
            return 1000
        }
    }
}

class Solution {
    func romanToInt(_ s: String) -> Int {
        var arr = Array(s).reversed()
        var pre = Roman(rawValue: String(arr.first!))!.num

        return arr.dropFirst().reduce(pre) {
            r, cur in
            let num = Roman(rawValue: String(cur))!.num
            var result = r
            if num < pre {
                result -= num
            } else {
                result += num
            }
            pre = num
            return result
        }
    }
}
