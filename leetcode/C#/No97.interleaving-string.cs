/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.
 *
 * Example:
 * Given:
 * s1 = "aabcc",
 * s2 = "dbbca",
 * When s3 = "aadbbcbcac", return true.
 * When s3 = "aadbbbaccc", return false.
 */

public class Solution {
    public bool IsInterleave(string s1, string s2, string s3) {
        if (s1.Length + s2.Length != s3.Length) return false;

        bool[,] dp = new bool[s1.Length + 1, s2.Length + 1];

        for (int i = 0; i <= s1.Length; i += 1) {
            for (int j = 0; j <= s2.Length; j += 1) {
                if (i == 0 && j == 0) {
                    dp[i, j] = true;
                } else if (i == 0) {
                    dp[i, j] = dp[i, j - 1] && s2[j - 1] == s3[i + j - 1];
                } else if (j == 0) {
                    dp[i, j] = dp[i - 1, j] && s1[i - 1] == s3[i + j - 1];
                } else {
                    dp[i, j] = (dp[i, j - 1] && s2[j - 1] == s3[i + j - 1])
                        || (dp[i - 1, j] && s1[i - 1] == s3[i + j - 1]);
                }
            }
        }

        return dp[s1.Length, s2.Length];
    }
}
