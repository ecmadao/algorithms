/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * Examples:
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 * 简而言之，就是求一个字符串里面不重复字符串的最大长度
 * 例如 pwwkew，从首位开始，p, pw, pww，重复，继续查找: w, wk, wke, wkew, 重复，故最长不重复字符串为 wke，长度为 3
*/

class Solution {
    func lengthOfLongestSubstring(_ s: String) -> Int {
        if s.isEmpty {
            return 0
        }
        var startIndex = s.startIndex
        var endIndex = s.index(startIndex, offsetBy: 1)
        var currentMax = 1

        while endIndex <= s.endIndex {
            if endIndex == s.endIndex {
                break
            }
            let currentChar = s[endIndex]
            if startIndex < endIndex, let existIndex = s[startIndex..<endIndex].index(of: currentChar) {
                currentMax = max(currentMax, endIndex.encodedOffset - startIndex.encodedOffset)
                startIndex = s.index(existIndex, offsetBy: 1)
            }
            endIndex = s.index(endIndex, offsetBy: 1)
        }
        currentMax = max(currentMax, endIndex.encodedOffset - startIndex.encodedOffset)
        return currentMax
    }
}
