/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Implement atoi to convert a string to an integer.
 *
 * Hint:
 * Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.
 *
 * Notes:
 * It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.
 *
 * 把字符串转换为数字
 */

/*
 * 这道题官方的解答有点微妙。例如，"+2" -> 2, "-2" -> -2 这些都没问题，
 * 但是类似 "+-2", "++2", "-+-2" 这样字符串，在 Solution 里只有被解为 0 才算正确，
 * 但我认为如果分别是 -2, 2, 2 这样才应该更好
 */
class Solution {
    func myAtoiWrong(_ str: String) -> Int {
        var numberOfNegative = 0
        var result = 0
        for char in str {
            if char == "-" {
                numberOfNegative += 1
            }
            if let num = Int(String(char)) {
                result = result * 10 + num
            }
            if result > Int(Int32.max) / 10 { return 0 }
        }
        return numberOfNegative % 2 == 0 ? result : result * -1
    }

    func canbeNum(_ char: Character) -> Bool {
        return char >= "0" && char <= "9"
    }

    /*
     * 注意检查:
     * 在没有非空字符出现以前，前面的空字符都可以略过："   +2" -> "+2" -> 2
     * 如果出现了非空字符，再出现空字符，则跳出循环："+ 2" -> "+" -> 0
     * 正负号最多可出现一个，且必须在前面：
     * "   +2-" -> "+2" -> 2
     * "-+2" -> "-" -> 0
     * 从上几条规则延伸：字符串中间出现不合法的（无法转为数字）字符，则跳出循环：
     * "2a2" -> "2" -> 2
     * "22 3" -> "22" -> 22
     */
    func myAtoi(_ str: String) -> Int {
        var symbol = 1
        var result = 0
        var hasNumOrSymbol = false
        var isEmptyBefore = true
        for char in str {
            if !canbeNum(char) {
                if char == " " {
                    if isEmptyBefore {
                        continue
                    } else {
                        break
                    }
                }
                isEmptyBefore = false
                if hasNumOrSymbol { break }
                if char == "+" || char == "-" {
                    if char == "-" { symbol = -1 }
                    hasNumOrSymbol = true
                } else {
                    break
                }
            } else {
                isEmptyBefore = false
                hasNumOrSymbol = true
                let num = Int(String(char))!
                result = result * 10 + num
                if symbol > 0 && result > Int(Int32.max) { return Int(Int32.max) }
                if symbol < 0 && result * symbol < Int(Int32.min) { return Int(Int32.min) }
            }
        }
        return result * symbol
    }
}
