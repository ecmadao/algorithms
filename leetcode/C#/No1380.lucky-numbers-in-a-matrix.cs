/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.
 * A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.
 *
 * Example 1:
 * Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
 * Output: [15]
 * Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column
 *
 * Example 2:
 * Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
 * Output: [12]
 * Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.
 *
 * Example 3:
 * Input: matrix = [[7,8],[1,2]]
 * Output: [7]
 *
 * Constraints:
 * m == mat.length
 * n == mat[i].length
 * 1 <= n, m <= 50
 * 1 <= matrix[i][j] <= 10^5.
 * All elements in the matrix are distinct.
*/

public class Solution {
    public IList<int> LuckyNumbers (int[][] matrix) {
        int[] rowIndexes = new int[matrix[0].Length].Select(i => -1).ToArray();
        List<int> res = new List<int>();

        for (int i = 0; i < matrix.Length; i += 1) {

            int colIndex = -1;
            for (int j = 0; j < matrix[i].Length; j += 1) {
                if (rowIndexes[j] == -1 || matrix[i][j] > matrix[rowIndexes[j]][j]) rowIndexes[j] = i;
                if (colIndex == -1 || matrix[i][j] < matrix[i][colIndex]) colIndex = j;
            }
            if (i != rowIndexes[colIndex]) continue;
            int row = rowIndexes[colIndex] + 1;
            while (row < matrix.Length) {
                if (matrix[rowIndexes[colIndex]][colIndex] < matrix[row][colIndex]) {
                    rowIndexes[colIndex] = row;
                    break;
                }
                row += 1;
            }
            if (rowIndexes[colIndex] == i) res.Add(matrix[i][colIndex]);
        }
        return res;
    }
}
