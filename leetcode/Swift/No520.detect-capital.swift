/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a word, you need to judge whether the usage of capitals in it is right or not.
 * We define the usage of capitals in a word to be right when one of the following cases holds:
 * All letters in this word are capitals, like "USA".
 * All letters in this word are not capitals, like "leetcode".
 * Only the first letter in this word is capital if it has more than one letter, like "Google".
 * Otherwise, we define that this word doesn't use capitals in a right way.
 *
 * Example:
 * Input: "USA"
 * Output: True
 *
 * Input: "FlaG"
 * Output: False
 *
 * Note:
 * The input will be a non-empty word consisting of uppercase and lowercase latin letters.
 */

class Solution {
    func detectCapitalUse_1(_ word: String) -> Bool {
        var index = 0
        var upperIndexs = [Int]()
        var existLower = false

        for char in word.unicodeScalars {
            if CharacterSet.uppercaseLetters.contains(char) {
                upperIndexs.append(index)
            } else {
                existLower = true
            }

            if existLower {
                if upperIndexs.count > 1 || (upperIndexs.count == 1 && upperIndexs[0] != 0) {
                    return false
                }
            }
            index += 1
        }
        return true
    }

    func detectCapitalUse_2(_ word: String) -> Bool {
        var upperCount = 0
        for char in word.unicodeScalars {
            if CharacterSet.uppercaseLetters.contains(char) {
                upperCount += 1
            }
        }
        return upperCount == 0 || upperCount == word.count || (upperCount == 1 && CharacterSet.uppercaseLetters.contains(UnicodeScalar(String(word.first!))!))
    }
}
