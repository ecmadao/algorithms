/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 字符串轮转。给定两个字符串s1和s2，请编写代码检查s2是否为s1旋转而成（比如，waterbottle是erbottlewat旋转后的字符串）。
 *
 * 示例1:
 * 输入：s1 = "waterbottle", s2 = "erbottlewat"
 * 输出：True
 *
 * 示例2:
 * 输入：s1 = "aa", "aba"
 * 输出：False
 *
 * 提示：
 * 字符串长度在[0, 100000]范围内。
 *
 * 说明:
 * 你能只调用一次检查子串的方法吗？
 */

public class Solution {
    public bool IsFlipedString(string s1, string s2) {
        if (s1.Length != s2.Length) return false;
        if (s1 == s2) return true;

        for (int i = 0; i < s1.Length; i += 1) {
            if (s1[i] == s2[s2.Length - 1]) {
                if (s1.Substring(0, i + 1) == s2.Substring(s2.Length - i - 1) && s1.Substring(i + 1) == s2.Substring(0, s2.Length - 1 - i)) return true;
            }
        }
        return false;
    }
}