/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.
 *
 * For example, given the following triangle
 * [
 *     [2],
 *    [3,4],
 *   [6,5,7],
 *  [4,1,8,3]
 * ]
 * The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
 *
 * Note:
 * Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.
*/

public class Solution {
    public int MinimumTotal_DFS(IList<IList<int>> triangle) {
        if (triangle.Count == 0) return 0;
        if (triangle[0].Count == 0) return 0;

        int[,] cache = new int[triangle.Count, triangle[^1].Count];
        int Dfs(int row, int col) {
            if (col >= triangle[row].Count) return int.MaxValue;
            if (row == triangle.Count - 1) return triangle[row][col];
            if (cache[row, col] != 0) return cache[row, col];

            int res = triangle[row][col] + Math.Min(
                Dfs(row + 1, col),
                Dfs(row + 1, col + 1)
            );
            cache[row, col] = res;
            return res;
        }

        return Dfs(0, 0);
    }

    public int MinimumTotal_DP(IList<IList<int>> triangle) {
        if (triangle.Count == 0) return 0;
        if (triangle[0].Count == 0) return 0;

        int[] dp = new int[0];

        for (int i = 0; i < triangle.Count; i += 1) {
            int[] cache = new int[triangle[i].Count];
            for (int j = 0; j < triangle[i].Count; j += 1) {
                int min = triangle[i][j];
                if (i > 0) {
                    min += Math.Min(
                        j >= dp.Length ? int.MaxValue : dp[j],
                        j > 0 ? dp[j - 1] : int.MaxValue
                    );
                }
                cache[j] = min;
            }
            dp = cache;
        }
        return dp.Min();
    }
}