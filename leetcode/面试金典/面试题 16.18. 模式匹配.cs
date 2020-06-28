/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 你有两个字符串，即pattern和value。
 * pattern字符串由字母"a"和"b"组成，用于描述字符串中的模式。
 * 例如，字符串"catcatgocatgo"匹配模式"aabab"（其中"cat"是"a"，"go"是"b"），该字符串也匹配像"a"、"ab"和"b"这样的模式。
 * 但需注意"a"和"b"不能同时表示相同的字符串。编写一个方法判断value字符串是否匹配pattern字符串。
 *
 * 示例 1：
 * 输入： pattern = "abba", value = "dogcatcatdog"
 * 输出： true
 *
 * 示例 2：
 * 输入： pattern = "abba", value = "dogcatcatfish"
 * 输出： false
 *
 * 示例 3：
 * 输入： pattern = "aaaa", value = "dogcatcatdog"
 * 输出： false
 *
 * 示例 4：
 * 输入： pattern = "abba", value = "dogdogdogdog"
 * 输出： true
 * 解释： "a"="dogdog",b=""，反之也符合规则
 *
 * 提示：
 * 0 <= len(pattern) <= 1000
 * 0 <= len(value) <= 1000
 * 你可以假设pattern只包含字母"a"和"b"，value仅包含小写字母。
 */

public class Solution {
    public bool PatternMatching(string pattern, string value) {
        if (pattern.Length == 0) return value.Length == 0;

        int a = 0;
        int b = 0;
        foreach (char p in pattern) {
            if (p == 'a') a += 1;
            if (p == 'b') b += 1;
        }

        int firstCount = pattern[0] == 'a' ? a : b;
        int secondCount = pattern[0] == 'a' ? b : a;

        if (secondCount == 0) {
            if (value.Length % firstCount != 0) return false;
            int i = 0;
            int length = value.Length / firstCount;
            while (i < value.Length) {
                if (value[i..(i + length)] != value[0..length]) return false;
                i += length;
            }
            return true;
        }

        if (value.Length == 0) return false;

        int len = 0;
        while (len <= value.Length && (value.Length - len * firstCount) / secondCount >= 0) {
            if ((value.Length - len * firstCount) % secondCount != 0) {
                len += 1;
                continue;
            }

            int tmpLen = (value.Length - len * firstCount) / secondCount;
            int aLen = pattern[0] == 'a' ? len : tmpLen;
            int bLen = pattern[0] == 'a' ? tmpLen : len;

            string aStr = null;
            string bStr = null;
            bool matched = true;

            int index = 0;
            foreach (char p in pattern) {
                int strLen = p == 'a' ? aLen : bLen;
                string str = value[index..(index + strLen)];
                if (p == 'a') {
                    if (aStr == null) {
                        aStr = str;
                    } else if (aStr != str) {
                        matched = false;
                        break;
                    }
                } else {
                    if (bStr == null) {
                        bStr = str;
                    } else if (bStr != str) {
                        matched = false;
                        break;
                    }
                }
                index += strLen;
            }
            if (matched) return true;
            len += 1;
        }

        return false;
    }
}