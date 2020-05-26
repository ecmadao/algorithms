/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
 *
 * Example 1:
 * Input:
 * [
 *  [ 1, 2, 3 ],
 *  [ 4, 5, 6 ],
 *  [ 7, 8, 9 ]
 * ]
 * Output: [1,2,3,6,9,8,7,4,5]
 *
 * Example 2:
 * Input:
 * [
 *  [1, 2, 3, 4],
 *  [5, 6, 7, 8],
 *  [9,10,11,12]
 * ]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

public class Solution {
    public int[] SpiralOrder(int[][] matrix) {
        if (matrix.Length == 0) return new int[0];

        List<int> res = new List<int>();

        int r = 0;
        int c = 0;

        while (r * 2 <= matrix.Length && c * 2 <= matrix[0].Length) {
            int i = r;
            int j = c;
            
            while (c < matrix[0].Length - j && r < matrix.Length - i) res.Add(matrix[r][c++]);
            if (c == j) break;
            c--;

            while (++r < matrix.Length - i && c < matrix[0].Length - j) res.Add(matrix[r][c]);
            if (r == i) break;
            r--;
            if (r == i || c == j) break;

            while (--c >= j) res.Add(matrix[r][c]);
            c++;
            while (--r > i) res.Add(matrix[r][c]);
            r = i + 1;
            c = j + 1;
        }
        return res.ToArray();
    }
}