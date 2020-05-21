/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a string s, find the longest palindromic substring in s.
 * You may assume that the maximum length of s is 1000.
 *
 * Example 1:
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 *
 * Example 2:
 * Input: "cbbd"
 * Output: "bb"
*/

public class Solution {
    public string LongestPalindrome(string s) {
        if (s.Length <= 1) return s;
        bool[][] dp = new bool[s.Length][];
        string res = $"{s[0]}";
    
        for (int i = 0; i < s.Length; i += 1) {
            dp[i] = new bool[s.Length + 1].Select(_ => true).ToArray();
            dp[i][i] = true;

            int j = i - 1;
            while (j >= 0 && i + (i - j) <= s.Length) {
                int r1 = i + (i - j);
                dp[j][r1] = r1 < s.Length && s[j] == s[r1] && dp[j + 1][r1 - 1];

                int r2 = r1 - 1;
                dp[j][r2] = s[j] == s[r2] && dp[j + 1][r2 - 1];

                if (dp[j][r1] && r1 - j + 1 > res.Length) res = s.Substring(j, r1 - j + 1);
                if (dp[j][r2] && r2 - j + 1 > res.Length) res = s.Substring(j, r2 - j + 1);

                j -= 1;
            }
        }

        return res;
    }
}