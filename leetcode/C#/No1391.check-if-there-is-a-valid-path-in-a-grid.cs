/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a m x n grid. Each cell of the grid represents a street. The street of grid[i][j] can be:
 * - 1 which means a street connecting the left cell and the right cell.
 * - 2 which means a street connecting the upper cell and the lower cell.
 * - 3 which means a street connecting the left cell and the lower cell.
 * - 4 which means a street connecting the right cell and the lower cell.
 * - 5 which means a street connecting the left cell and the upper cell.
 * - 6 which means a street connecting the right cell and the upper cell.
 *
 * You will initially start at the street of the upper-left cell (0,0).
 * A valid path in the grid is a path which starts from the upper left cell (0,0) and ends at the bottom-right cell (m - 1, n - 1).
 * The path should only follow the streets.
 * Notice that you are not allowed to change any street.
 * Return true if there is a valid path in the grid or false otherwise.
 *
 * Example 1:
 * Input: grid = [[2,4,3],[6,5,2]]
 * Output: true
 * Explanation: As shown you can start at cell (0, 0) and visit all the cells of the grid to reach (m - 1, n - 1).
 *
 * Example 2:
 * Input: grid = [[1,2,1],[1,2,1]]
 * Output: false
 * Explanation: As shown you the street at cell (0, 0) is not connected with any street of any other cell and you will get stuck at cell (0, 0)
 *
 * Example 3:
 * Input: grid = [[1,1,2]]
 * Output: false
 * Explanation: You will get stuck at cell (0, 1) and you cannot reach cell (0, 2).
 *
 * Example 4:
 * Input: grid = [[1,1,1,1,1,1,3]]
 * Output: true
 *
 * Example 5:
 * Input: grid = [[2],[2],[2],[2],[2],[2],[6]]
 * Output: true
 *
 * Constraints:
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 300
 * 1 <= grid[i][j] <= 6
*/

public class Solution {
    public bool HasValidPath(int[][] grid) {
        int[][] directions = new int[][]{
            new int[]{ 0, 1, 0 },
            new int[]{ 0, -1, 1 },
            new int[]{ 1, 0, 2 },
            new int[]{ -1, 0, 3 }
        };

        int[][][] map = new int[6][][]{
            new int[4][]{
                new int[]{ 1, 3, 5 },
                new int[]{ 1, 4, 6 },
                new int[]{},
                new int[]{}
            },
            new int[4][]{
                new int[]{},
                new int[]{},
                new int[]{ 2, 5, 6 },
                new int[]{ 2, 3, 4 }
            },
            new int[4][]{
                new int[]{},
                new int[]{ 1, 4, 6 },
                new int[]{ 2, 5, 6 },
                new int[]{}
            },
            new int[4][]{
                new int[]{ 1, 3, 5 },
                new int[]{},
                new int[]{ 2, 5, 6 },
                new int[]{}
            },
            new int[4][]{
                new int[]{},
                new int[]{ 1, 4, 6 },
                new int[]{},
                new int[]{ 2, 3, 4 }
            },
            new int[4][]{
                new int[]{ 1, 3, 5 },
                new int[]{},
                new int[]{},
                new int[]{ 2, 3, 4 }
            }
        };

        Queue<int[]> q = new Queue<int[]>();
        q.Enqueue(new int[]{ 0, 0 });

        while (q.Count > 0) {
            int len = q.Count;
            while (len > 0) {
                int[] points = q.Dequeue();
                if (points[0] == grid.Length - 1 && points[1] == grid[0].Length - 1) return true;
                int raw = grid[points[0]][points[1]];

                grid[points[0]][points[1]] = 0;
                
                foreach (int[] dir in directions) {
                    int row = dir[0] + points[0];
                    int col = dir[1] + points[1];
                    if (row < 0 || col < 0 || row >= grid.Length || col >= grid[0].Length) continue;
                    if (grid[row][col] == 0) continue;
                    if (!map[raw - 1][dir[2]].Contains(grid[row][col])) continue;

                    if (row == grid.Length - 1 && col == grid[0].Length - 1) return true;
                    q.Enqueue(new int[]{ row, col });
                }
                len -= 1;
            }
        }

        return false;
    }
}