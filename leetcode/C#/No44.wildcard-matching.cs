/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.
 * - '?' Matches any single character.
 * - '*' Matches any sequence of characters (including the empty sequence).
 * The matching should cover the entire input string (not partial).
 * 
 * Note:
 * s could be empty and contains only lowercase letters a-z.
 * p could be empty and contains only lowercase letters a-z, and characters like ? or *.
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
 * p = "*"
 * Output: true
 * Explanation: '*' matches any sequence.
 * 
 * Example 3:
 * Input:
 * s = "cb"
 * p = "?a"
 * Output: false
 * Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
 * 
 * Example 4:
 * Input:
 * s = "adceb"
 * p = "*a*b"
 * Output: true
 * Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
 * 
 * Example 5:
 * Input:
 * s = "acdcb"
 * p = "a*c?b"
 * Output: false
 */

public class Solution {
    private bool Math(string s, int i, string p, int j, int[,] dp) {
        if (j >= p.Length) return i >= s.Length;
        if (i >= s.Length) return new System.Text.RegularExpressions.Regex(@"^\*{1,}$").IsMatch(p[j..]);

        if (dp[i, j] != 0) return dp[i, j] == 1 ? true : false;
        
        bool res = s[i] == p[j];
        if (p[j] == '?') {
            res = Math(s, i + 1, p, j + 1, dp);
        } else if (p[j] == '*') {
            res = Math(s, i + 1, p, j, dp) || Math(s, i, p, j + 1, dp);
        } else {
            res = res && Math(s, i + 1, p, j + 1, dp);
        }

        dp[i, j] = res ? 1 : 2;
        return res;
    }

    public bool IsMatch(string s, string p) {
        int[,] dp = new int[s.Length, p.Length];

        return Math(s, 0, p, 0, dp);
    }
}