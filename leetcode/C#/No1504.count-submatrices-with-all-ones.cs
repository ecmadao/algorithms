/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a rows * columns matrix mat of ones and zeros, return how many submatrices have all ones.
 *
 * Example 1:
 * Input: mat = [[1,0,1],
 *              [1,1,0],
 *              [1,1,0]]
 * Output: 13
 * Explanation:
 * There are 6 rectangles of side 1x1.
 * There are 2 rectangles of side 1x2.
 * There are 3 rectangles of side 2x1.
 * There is 1 rectangle of side 2x2. 
 * There is 1 rectangle of side 3x1.
 * Total number of rectangles = 6 + 2 + 3 + 1 + 1 = 13.
 *
 * Example 2:
 * Input: mat = [[0,1,1,0],
 *              [0,1,1,1],
 *              [1,1,1,0]]
 * Output: 24
 * Explanation:
 * There are 8 rectangles of side 1x1.
 * There are 5 rectangles of side 1x2.
 * There are 2 rectangles of side 1x3. 
 * There are 4 rectangles of side 2x1.
 * There are 2 rectangles of side 2x2. 
 * There are 2 rectangles of side 3x1. 
 * There is 1 rectangle of side 3x2. 
 * Total number of rectangles = 8 + 5 + 2 + 4 + 2 + 2 + 1 = 24.
 *
 * Example 3:
 * Input: mat = [[1,1,1,1,1,1]]
 * Output: 21
 *
 * Example 4:
 * Input: mat = [[1,0,1],[0,1,0],[1,0,1]]
 * Output: 5
 *
 * Constraints:
 * 1 <= rows <= 150
 * 1 <= columns <= 150
 * 0 <= mat[i][j] <= 1
*/

public class Solution {
    public int NumSubmat(int[][] mat) {
        int[,] dp = new int[mat.Length + 1, mat[0].Length + 1];
        int[,,] cache = new int[mat.Length + 1, mat[0].Length + 1, 2];

        for (int i = 0; i < mat.Length; i += 1) {
            for (int j = 0; j < mat[0].Length; j += 1) {
                dp[i + 1, j + 1] = dp[i + 1, j] + dp[i, j + 1] - dp[i, j];

                if (mat[i][j] == 1) {
                    dp[i + 1, j + 1] += (cache[i + 1, j, 0] + 1);

                    int height = cache[i, j + 1, 1];
                    for (int k = j; k >= j - cache[i + 1, j, 0]; k -= 1) {
                        height = Math.Min(height, cache[i, k + 1, 1]);
                        dp[i + 1, j + 1] += height;
                    }

                    cache[i + 1, j + 1, 0] = cache[i + 1, j, 0] + 1;
                    cache[i + 1, j + 1, 1] = cache[i, j + 1, 1] + 1;
                }
            }
        }

        return dp[mat.Length, mat[0].Length];
    }
}