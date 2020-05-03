/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row, column, and both diagonals all have the same sum.
 * Given an grid of integers, how many 3 x 3 "magic square" subgrids are there?  (Each subgrid is contiguous).
 *
 * Example 1:
 * Input: [
 *   [4,3,8,4],
 *   [9,5,1,9],
 *   [2,7,6,2]]
 * Output: 1
 * Explanation: 
 * The following subgrid is a 3 x 3 magic square:
 * 438
 * 951
 * 276
 *
 * while this one is not:
 * 384
 * 519
 * 762
 * In total, there is only one magic square inside the given grid.
 *
 * Note:
 * 1 <= grid.length <= 10
 * 1 <= grid[0].length <= 10
 * 0 <= grid[i][j] <= 15
*/

public class Solution {
    public int NumMagicSquaresInside(int[][] grid) {
        int target = 15;
        int[] nums = new int[9]{ 1, 2, 3, 4, 5, 6, 7, 8, 9 };

        bool isMagic(int row, int col) {
            HashSet<int> set = new HashSet<int>(nums);
            int[] sums = new int[6];

            for (int i = row; i < row + 3; i += 1) {
                for (int j = col; j < col + 3; j += 1) {
                    if (!set.Contains(grid[i][j])) return false;
                    set.Remove(grid[i][j]);
                    sums[i - row] += grid[i][j];
                    sums[j - col + 3] += grid[i][j];
                }
                if (sums[i - row] != target) return false;
            }
            for (int i = 3; i < sums.Length; i += 1) {
                if (sums[i] != target) return false;
            }
            return grid[row][col] + grid[row + 1][col + 1] + grid[row + 2][col + 2] == target &&
            grid[row][col + 2] + grid[row + 1][col + 1] + grid[row + 2][col] == target;
        }

        int res = 0;
        for (int i = 0; i < grid.Length - 2; i += 1) {
            for (int j = 0; j < grid[0].Length - 2; j += 1) {
                if (isMagic(i, j)) res += 1;
            }
        }
        return res;
    }
}