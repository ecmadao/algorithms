/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Two images A and B are given, represented as binary, square matrices of the same size.  (A binary matrix has only 0s and 1s as values.)
 * We translate one image however we choose (sliding it left, right, up, or down any number of units), and place it on top of the other image.  After, the overlap of this translation is the number of positions that have a 1 in both images.
 * (Note also that a translation does not include any kind of rotation.)
 * What is the largest possible overlap?
 *
 * Example 1:
 * Input:
 * A = [[1,1,0],
 *      [0,1,0],
 *      [0,1,0]]
 * B = [[0,0,0],
 *      [0,1,1],
 *      [0,0,1]]
* Output: 3
* Explanation: We slide A to right by 1 unit and down by 1 unit.
*
* Notes: 
* 1 <= A.length = A[0].length = B.length = B[0].length <= 30
* 0 <= A[i][j], B[i][j] <= 1
*/

public class Solution {
    public int LargestOverlap(int[][] A, int[][] B) {
        int[,] cache = new int[2 * A.Length + 1, 2 * A.Length + 1];
        for (int i = 0; i < A.Length; i += 1) {
            for (int j = 0; j < A[0].Length; j += 1) {
                if (A[i][j] != 1) continue;

                for (int k = 0; k < B.Length; k += 1) {
                    for (int z = 0; z < B[0].Length; z += 1) {
                        if (B[k][z] != 1) continue;

                        cache[i - k + A.Length, j - z + A.Length] += 1;
                    }
                }
            }
        }

        int res = 0;
        for (int i = 0; i < 2 * A.Length + 1; i += 1) {
            for (int j = 0; j < 2 * A.Length + 1; j += 1) {
                res = Math.Max(res, cache[i, j]);
            }
        }

        return res;
    }
}