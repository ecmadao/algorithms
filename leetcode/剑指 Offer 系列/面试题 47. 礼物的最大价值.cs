/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。
 * 你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。
 * 给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？
 *
 * 示例 1:
 * 输入: 
 * [
 *  [1,3,1],
 *  [1,5,1],
 *  [4,2,1]
 * ]
 * 输出: 12
 * 解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物
 *
 * 提示：
 * 0 < grid.length <= 200
 * 0 < grid[0].length <= 200
 */

public class Solution {
    public int MaxValue(int[][] grid) {
        int[,] dp = new int[grid.Length + 1, grid[0].Length + 1];

        for (int i = 1; i <= grid.Length; i += 1) {
            for (int j = 1; j <= grid[0].Length; j += 1) {
                dp[i, j] = grid[i - 1][j - 1] + Math.Max(
                    dp[i - 1, j],
                    dp[i, j - 1]
                );
            }
        }

        return dp[grid.Length, grid[0].Length];
    }
}