/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
 *
 * Example:
 * Input: 
 * 1 0 1 0 0
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 * Output: 4
*/

public class Solution {
    public int MaximalSquare(char[][] matrix) {
        if (matrix.Length == 0) return 0;
        int[,] dp = new int[matrix.Length + 1, matrix[0].Length + 1];
        int maxLen = 0;

        for (int i = 0; i < matrix.Length; i += 1) {
            for (int j = 0; j < matrix[i].Length; j += 1) {
                if (matrix[i][j] == '0') {
                    dp[i + 1, j + 1] = 0;
                } else {
                    int left = dp[i + 1, j];
                    int top = dp[i, j + 1];

                    if (top == left) {
                        dp[i + 1, j + 1] = matrix[i - top][j - top] == '1' ? top + 1 : top;
                    } else {
                        dp[i + 1, j + 1] = Math.Min(top, left) + 1;
                    }
                }
                maxLen = Math.Max(maxLen, dp[i + 1, j + 1]);
            }
        }

        return maxLen * maxLen;
    }
}
