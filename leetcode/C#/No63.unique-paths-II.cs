/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 * The robot can only move either down or right at any point in time.
 * The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 * Now consider if some obstacles are added to the grids. How many unique paths would there be?
 * An obstacle and empty space is marked as 1 and 0 respectively in the grid.
 * Note: m and n will be at most 100.
 *
 * Example 1:
 * Input:
 * [
 *  [0,0,0],
 *  [0,1,0],
 *  [0,0,0]
 * ]
 * Output: 2
 * Explanation:
 * There is one obstacle in the middle of the 3x3 grid above.
 * There are two ways to reach the bottom-right corner:
 * 1. Right -> Right -> Down -> Down
 * 2. Down -> Down -> Right -> Right
*/

public class Solution {
    private int[][] dirs = new int[2][] {
        new int[2] { 0, 1 },
        new int[2] { 1, 0 }
    };

    private int Dfs(int i, int j, int[][] obstacleGrid, int[,] cache) {
        if (obstacleGrid[i][j] == 1) {
            cache[i, j] = -1;
            return 0;
        }
        if (i == obstacleGrid.Length - 1 && j == obstacleGrid[0].Length - 1) {
            return 1;
        }
        if (cache[i, j] > 0) {
            return cache[i, j];
        }

        int res = 0;
        foreach (int[] dir in dirs) {
            int row = i + dir[0];
            int col = j + dir[1];
            if (row < obstacleGrid.Length && col < obstacleGrid[0].Length && obstacleGrid[row][col] == 0) {
                res += Dfs(row, col, obstacleGrid, cache);
            }
        }

        cache[i, j] = res == 0 ? -1 : res;
        return res;
    }

    public int UniquePathsWithObstacles(int[][] obstacleGrid) {
        int[,] cache = new int[obstacleGrid.Length, obstacleGrid[0].Length];
        return Dfs(0, 0, obstacleGrid, cache);
    }
}