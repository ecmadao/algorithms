/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * In a gold mine grid of size m * n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.
 * Return the maximum amount of gold you can collect under the conditions:
 * Every time you are located in a cell you will collect all the gold in that cell.
 * From your position you can walk one step to the left, right, up or down.
 * You can't visit the same cell more than once.
 * Never visit a cell with 0 gold.
 * You can start and stop collecting gold from any position in the grid that has some gold.
 *
 * Example 1:
 * Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
 * Output: 24
 * Explanation:
 * [[0,6,0],
 *  [5,8,7],
 *  [0,9,0]]
 * Path to get the maximum gold, 9 -> 8 -> 7.
 *
 * Example 2:
 * Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
 * Output: 28
 * Explanation:
 * [[1,0,7],
 *  [2,0,6],
 *  [3,4,5],
 *  [0,3,0],
 *  [9,0,20]]
 * Path to get the maximum gold, 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7.
 *
 * Constraints:
 * 1 <= grid.length, grid[i].length <= 15
 * 0 <= grid[i][j] <= 100
 * There are at most 25 cells containing gold.
*/

public class Solution {
    public int GetMaximumGold(int[][] grid) {
        List<int[]> positions = new List<int[]>(){
            new int[]{ 0, 1 },
            new int[]{ 0, -1 },
            new int[]{ 1, 0 },
            new int[]{ -1, 0 }
        };
        int res = 0;

        void dfs(int i, int j, int total) {
            int count = grid[i][j];
            total += count;
            grid[i][j] = 0;
            int d = 0;

            foreach (int[] position in positions) {
                int row = i + position[0];
                int col = j + position[1];
                if (row < 0 || col < 0 || row >= grid.Length || col >= grid[0].Length) continue;
                if (grid[row][col] == 0) continue;
                d += 1;
                dfs(row, col, total);
            }
            if (d == 0) res = Math.Max(res, total);

            total -= count;
            grid[i][j] = count;
        }

        for (int i = 0; i < grid.Length; i += 1) {
            for (int j = 0; j < grid[i].Length; j += 1) {
                if (grid[i][j] != 0) dfs(i, j, 0);
            }
        }
        return res;
    }
}