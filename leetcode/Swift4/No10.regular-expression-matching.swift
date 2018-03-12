/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * Implement regular expression matching with support for '.' and '*'.
 *
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 *
 * The matching should cover the entire input string (not partial).
 * The function prototype should be:
 * bool isMatch(const char *s, const char *p)
 *
 * Example:
 * isMatch("aa","a") → false
 * isMatch("aa","aa") → true
 * isMatch("aaa","aa") → false
 * isMatch("aa", "a*") → true
 * isMatch("aa", ".*") → true
 * isMatch("ab", ".*") → true
 * isMatch("aab", "c*a*b") → true
 *
 * 从实现的技术上讲，这道题应该是 Easy 难度，唯一坑人的是要考虑清楚需求：要实现的 match 必须全量匹配才算 true
 * 比如，'abcd' match  'd*'，用正则可以 match 到 d，但是 d !== abcd，故返回 false
 */

/**
 * Test case
 * isMatch("acccc","aa*..*b*") -> true
 * isMatch("ab",".*...*") -> true
 * isMatch("ab",".*...*.") -> false
 */

class Solution {
    /*
     * 将包含正则符合的字符串转换为数组，规则如题意
     * "aa*..*b*" -> ["a", "a*", ".", ".*", "b*"]
     * ".*...*" -> [".*", ".", ".", ".*"]
     * 即 * 需要和前面的字符串组合在一起，以表示可以匹配前面字符串的 0 次或者 N 次
     */
    func buildMatchList(_ p: String) -> [String] {
        var result = [String]()
        var startIndex = p.startIndex

        while startIndex.encodedOffset < p.count {
            if startIndex.encodedOffset < p.count - 1 {
                let nextIndex = p.index(startIndex, offsetBy: 1)
                if p[nextIndex] == "*" {
                    result.append(String(p[startIndex]) + "*")
                    startIndex = p.index(nextIndex, offsetBy: 1)
                } else {
                    result.append(String(p[startIndex]))
                    startIndex = nextIndex
                }
            } else {
                result.append(String(p[startIndex]))
                break
            }
        }
        return result
    }

    func isMatch(_ s: String, _ p: String) -> Bool {
        let matchList = buildMatchList(p)
        let strList = Array(s)

        func match(strIndex: Int, listIndex: Int) -> Bool {
            if strIndex >= strList.count && listIndex >= matchList.count { return true }
            if strIndex < strList.count && listIndex >= matchList.count { return false }

            let matchStr = matchList[listIndex]
            if matchStr[matchStr.index(matchStr.endIndex, offsetBy: -1)] != "*" {
                var sIndex = strIndex
                for char in matchStr {
                    if sIndex >= strList.count { return false }
                    if char != "." {
                        if strList[sIndex] != char { return false }
                    }
                    sIndex += 1
                }
                return match(strIndex: sIndex, listIndex: listIndex + 1)
            } else {
                var count = 0
                let prefix = matchStr[matchStr.startIndex]
                var strMatch = true
                while count <= strList.count - strIndex {
                    var result = false

                    strMatch = count == 0 ? true : strMatch && (prefix == "." || prefix == strList[count + strIndex - 1])
                    if strMatch {
                        result = match(strIndex: count + strIndex, listIndex: listIndex + 1)
                        if result { return true }
                    } else {
                        return false
                    }
                    count += 1
                }
                return false
            }
        }
        return match(strIndex: 0, listIndex: 0)
    }
}
