/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an integer, convert it to a roman numeral.
 * Input is guaranteed to be within the range from 1 to 3999.
 *
 * Example:
 * num -> 3333
 * roman -> MMMCCCXXXIII
 *
 * 把数字转换为罗马数字
 * 罗马数字 Wiki: https://zh.wikipedia.org/wiki/%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97
 * 1 -> I
 * 2 -> II
 * 3 -> III
 * 4 -> IV
 * 5 -> Ⅴ
 * 6 -> VI
 * 7 -> VII
 * 8 -> VIII
 * 9 -> IX
 * 10 -> X
 * 50 -> L
 * 100 -> C
 * 500 -> D
 * 1000 -> M
 *
 * 基本思路：
 * 把数字每一位分别转换为罗马数字，但要注意：
 * 1. 左减数字必须为一位，比如 8 写成 VIII，而非 IIX
 * 2. 右加数字不可连续超过三位，比如 14 写成 XIV，而非 XIIII
 * 3. 左减时不可跨越一个位值。比如，99不可以用 IC（100-1）表示，而是用 XCIX（[100-10]+[10-1]）表示（等同于阿拉伯数字每位数字分别表示）
 */

extension String {
    static func *(lhs: String, rhs: Int) -> String {
        if rhs < 0 {
            return "-\(lhs * abs(rhs))"
        }
        return String(repeating: lhs, count: rhs)
    }

    static func +(lhs: String, rhs: String) -> String {
        if rhs.isEmpty {
            return lhs
        } else if rhs[rhs.startIndex] == "-" {
            return "\(rhs[rhs.index(after: rhs.startIndex)...])\(lhs)"
        }
        return "\(lhs)\(rhs)"
    }
}

enum Roman: String {
    case I = "I"
    case V = "V"
    case X = "X"
    case L = "L"
    case C = "C"
    case D = "D"
    case M = "M"

    var val: String {
        get {
            return self.rawValue
        }
    }
}

class Solution {
    private func mapIntToRoman(_ num: Int) -> String {
        if num < 10 {
            return num < 4
                ? Roman.I.rawValue * num
                : (num == 9
                    ? Roman.I.rawValue + Roman.X.rawValue
                    : Roman.V.rawValue + Roman.I.rawValue * (num - 5))
        } else if num < 100 {
            return num < 40
                ? Roman.X.rawValue * (num / 10)
                : (num == 90
                    ? Roman.X.rawValue + Roman.C.rawValue
                    : Roman.L.rawValue + Roman.X.rawValue * (num / 10 - 5))
        } else if num < 1000 {
            return num < 400
                ? Roman.C.rawValue * (num / 100)
                : (num == 900
                    ? Roman.C.rawValue + Roman.M.rawValue
                    : Roman.D.rawValue + Roman.C.rawValue * (num / 100 - 5))
        } else {
            return Roman.M.rawValue * (num / 1000)
        }
    }

    func intToRoman(_ num: Int) -> String {
        var last = num
        var tens = 1
        var result = ""

        while last > 0 {
            let remain = last % 10 * tens
            let roman = mapIntToRoman(remain)
            result = roman + result
            last = last / 10
            tens = tens * 10
        }
        return result
    }
}
