/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * You are given a map of a server center, represented as a m * n integer matrix grid,
 * where 1 means that on that cell there is a server and 0 means that it is no server.
 * Two servers are said to communicate if they are on the same row or on the same column.
 * Return the number of servers that communicate with any other server.
 *
 * Example 1:
 * Input: grid = [[1,0],[0,1]]
 * Output: 0
 * Explanation: No servers can communicate with others.
 *
 * Example 2:
 * Input: grid = [[1,0],[1,1]]
 * Output: 3
 * Explanation: All three servers can communicate with at least one other server.
 *
 * Example 3:
 * Input: grid = [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]
 * Output: 4
 * Explanation:
 * The two servers in the first row can communicate with each other.
 * The two servers in the third column can communicate with each other.
 * The server at right bottom corner can't communicate with any other server.
 *
 * Constraints:
 * m == grid.length
 * n == grid[i].length
 * 1 <= m <= 250
 * 1 <= n <= 250
 * grid[i][j] == 0 or 1
*/

public class Solution {
    public int CountServers(int[][] grid) {
        int[][] positions = new int[][]{
            new int[]{ 0, 1 },
            new int[]{ 0, -1 },
            new int[]{ 1, 0 },
            new int[]{ -1, 0 }
        };

        int dfs(int i, int j, int[][] dirs) {
            int count = grid[i][j] == 0 ? 0 : 1;
            grid[i][j] = 0;
            foreach (int[] dir in dirs) {
                int row = i + dir[0];
                int col = j + dir[1];
                if (row < 0 || col < 0 || row >= grid.Length || col >= grid[0].Length) continue;
                if (grid[row][col] == 0) {                    
                    count += dfs(row, col, new int[][]{
                        dir
                    });
                } else {
                    count += dfs(row, col, positions);
                }
            }
            return count;
        }

        int res = 0;
        for (int i = 0; i < grid.Length; i += 1) {
            for (int j = 0; j < grid[i].Length; j += 1) {
                if (grid[i][j] == 1) {
                    int count = dfs(i, j, positions);
                    if (count > 1) res += count; 
                }
            }
        }
        return res;
    }
}
