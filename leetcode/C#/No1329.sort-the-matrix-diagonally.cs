/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a m * n matrix mat of integers, sort it diagonally in ascending order from the top-left to the bottom-right then return the sorted array.
 *
 * Example 1:
 * Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
 * Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]
 *
 * Constraints:
 * m == mat.length
 * n == mat[i].length
 * 1 <= m, n <= 100
 * 1 <= mat[i][j] <= 100
*/

public class Solution {
    private int Search (List<int> list, int target) {
        int i = 0;
        int j = list.Count - 1;

        while (i <= j) {
            int mid = (i + j) / 2;
            if (list[mid] == target) return mid;
            if (list[mid] < target) {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }
        return i;
    }

    public int[][] DiagonalSort(int[][] mat) {
        Dictionary<int, List<int>> dict = new Dictionary<int, List<int>>();

        for (int i = 0; i < mat.Length; i += 1) {
            for (int j = 0; j < mat[i].Length; j += 1) {
                int diff = i - j;
                if (!dict.ContainsKey(diff)) {
                    dict[diff] = new List<int>();
                    dict[diff].Add(mat[i][j]);
                } else {
                    int index = Search(dict[diff], mat[i][j]);
                    dict[diff].Insert(index, mat[i][j]);
                }
            }
        }

        return Enumerable.Range(0, mat.Length).Select((_, i) => {
            return Enumerable.Range(0, mat[0].Length).Select((v, j) => {
                int res = dict[i - j][0];
                dict[i - j].RemoveAt(0);
                return res;
            }).ToArray();
        }).ToArray();
    }
}