/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given two integer arrays A and B, return the maximum length of an subarray that appears in both arrays.
 *
 * Example 1:
 * Input:
 * A: [1,2,3,2,1]
 * B: [3,2,1,4,7]
 * Output: 3
 * Explanation: 
 * The repeated subarray with maximum length is [3, 2, 1].
 *
 * Note:
 * 1 <= len(A), len(B) <= 1000
 * 0 <= A[i], B[i] < 100
*/

public class Solution {
    public int FindLength(int[] A, int[] B) {
        int[,] dp = new int[A.Length, B.Length];
        int res = 0;

        for (int i = 0; i < A.Length; i += 1) {
            for (int j = 0; j < B.Length; j += 1) {
                if (A[i] == B[j]) {
                    dp[i, j] = Math.Max(
                        dp[i, j],
                        (i > 0 && j > 0 ? dp[i - 1, j - 1] : 0) + 1
                    );
                } else {
                    dp[i, j] = 0;
                }
                res = Math.Max(res, dp[i, j]);
            }
        }
        return res;
    }
}