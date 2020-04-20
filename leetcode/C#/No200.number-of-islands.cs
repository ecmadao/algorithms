/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 * You may assume all four edges of the grid are all surrounded by water.
 *
 * Example 1:
 * Input:
 * 11110
 * 11010
 * 11000
 * 00000
 * Output: 1
 *
 * Example 2:
 * Input:
 * 11000
 * 11000
 * 00100
 * 00011
 * Output: 3
*/

public class Solution {
    public int NumIslands(char[][] grid) {
        int res = 0;
        int M = grid.Length;
        if (M == 0) return res;
        int N = grid[0].Length;

        void dfs(int i, int j) {
            grid[i][j] = '0';
            foreach (int[] coordinate in new int[][]{
                new int[]{ i + 1, j },
                new int[]{ i - 1, j },
                new int[]{ i, j + 1 },
                new int[]{ i, j - 1 }
            }) {
                if (coordinate[0] < 0 || coordinate[1] < 0 || coordinate[0] >= M || coordinate[1] >= N) continue;
                if (grid[coordinate[0]][coordinate[1]] != '1') continue;
                dfs(coordinate[0], coordinate[1]);
            }
        }

        for (int i = 0; i < M; i += 1) {
            for (int j = 0; j < N; j += 1) {
                if (grid[i][j] == '1') {
                    res += 1;
                    dfs(i, j);
                }
            }
        }
        return res;
    }
}