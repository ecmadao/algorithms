/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given n and m which are the dimensions of a matrix initialized by zeros and given an array indices where indices[i] = [ri, ci].
 * For each pair of [ri, ci] you have to increment all cells in row ri and column ci by 1.
 * Return the number of cells with odd values in the matrix after applying the increment to all indices.
 *
 * Example 1:
 * Input: n = 2, m = 3, indices = [[0,1],[1,1]]
 * Output: 6
 * Explanation: Initial matrix = [[0,0,0],[0,0,0]].
 * After applying first increment it becomes [[1,2,1],[0,1,0]].
 * The final matrix will be [[1,3,1],[1,3,1]] which contains 6 odd numbers.
 *
 * Example 2:
 * Input: n = 2, m = 2, indices = [[1,1],[0,0]]
 * Output: 0
 * Explanation: Final matrix = [[2,2],[2,2]]. There is no odd number in the final matrix.
 *
 * Constraints:
 * 1 <= n <= 50
 * 1 <= m <= 50
 * 1 <= indices.length <= 100
 * 0 <= indices[i][0] < n
 * 0 <= indices[i][1] < m
*/

public class Solution {
    public int OddCells(int n, int m, int[][] indices) {
        bool[] rows = new bool[n];
        bool[] cols = new bool[m];
    
        foreach (int[] indice in indices) {
            rows[indice[0]] = !rows[indice[0]];
            cols[indice[1]] = !cols[indice[1]];
        }

        int row = 0;
        int col = 0;
        foreach (bool r in rows) if (r) row += 1;
        foreach (bool c in cols) if (c) col += 1;

        return row * m + col * n - row * col * 2; 
    }
}