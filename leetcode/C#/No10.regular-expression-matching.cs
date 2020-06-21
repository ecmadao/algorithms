/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 * The matching should cover the entire input string (not partial).
 *
 * Note:
 * s could be empty and contains only lowercase letters a-z.
 * p could be empty and contains only lowercase letters a-z, and characters like . or *.
 *
 * Example 1:
 * Input:
 * s = "aa"
 * p = "a"
 * Output: false
 * Explanation: "a" does not match the entire string "aa".
 *
 * Example 2:
 * Input:
 * s = "aa"
 * p = "a*"
 * Output: true
 * Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
 *
 * Example 3:
 * Input:
 * s = "ab"
 * p = ".*"
 * Output: true
 * Explanation: ".*" means "zero or more (*) of any character (.)".
 *
 * Example 4:
 * Input:
 * s = "aab"
 * p = "c*a*b"
 * Output: true
 * Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".
 *
 * Example 5:
 * Input:
 * s = "mississippi"
 * p = "mis*is*p*."
 * Output: false
*/

public class Solution {
    public bool IsMatch(string s, string p) {
        int[,] dp = new int[s.Length + 1, p.Length + 1];

        bool Match(int i, int j) {
            if (j >= p.Length) return i >= s.Length;
            if (dp[i, j] != 0) return dp[i, j] == 1 ? true : false;

            bool res = i < s.Length && (s[i] == p[j] || p[j] == '.');

            if (j + 1 < p.Length && p[j + 1] == '*') {
                res = Match(i, j + 2) || (res && Match(Math.Min(i + 1, s.Length), j));
            } else {
                res = res && Match(Math.Min(i + 1, s.Length), j + 1);
            }

            dp[i, j] = res ? 1 : 2;
            return res;
        }

        return Match(0, 0);
    }
}