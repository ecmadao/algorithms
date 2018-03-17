/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * Example:
 * strings -> ['abc', 'ab', 'abced']
 * longest-prefix -> 'ab'
 *
 * strings -> ['', 'ab', 'abced']
 * longest-prefix -> ''
 *
 * 从一些字符串中找到最长的公共前缀
 */

class Solution {
    func longestCommonPrefix(_ strs: [String]) -> String {
        let minStr = try? strs.min(by: { $0.count < $1.count })
        guard var minS = minStr! else {
            return ""
        }
        var endIndex = minS.endIndex

        for str in strs {
            if (str.hasPrefix(minS)) {
                continue
            }
            while endIndex > minS.startIndex && !str.hasPrefix(minS) {
                endIndex = minS.index(before: endIndex)
                minS = String(minS[minS.startIndex..<endIndex])
            }
        }
        return minS
    }
}