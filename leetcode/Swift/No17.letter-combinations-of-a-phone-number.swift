/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a digit string, return all possible letter combinations that the number could represent.
 * A mapping of digit to letters (just like on the telephone buttons) is given below.
 *
 * Example:
 * Input:Digit string "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
 *
 * 输出一串数字组成的 String，返回其在九宫格键盘上所代表字母的全部可能的排列组合
 */

class Solution {
    func mapIntToLetter(start: Int, end: Int) -> Dictionary<Int, [Character]> {
        let lowerLetters = Array("abcdefghijklmnopqrstuvwxyz")
        var result = Dictionary<Int, [Character]>()
        var count = 0

        for num in start...end {
            let offset = num == 7 || num == 9 ? 4 : 3
            result[num] = Array(lowerLetters[count..<(count + offset)])
            count += offset
        }
        return result
    }

    func letterCombinations(_ digits: String) -> [String] {
        let dict = mapIntToLetter(start: 2, end: 9)
        var result = [String]()

        for char in digits {
            let letters = dict[Int(String(char))!, default: [Character]()]
            if result.count == 0 {
                result = letters.map { String($0) }
                continue
            }
            var newResult = [String]()
            for letter in letters {
                for existStr in result {
                    newResult.append("\(existStr)\(letter)")
                }
            }
            result = newResult
        }
        return result
    }
}
