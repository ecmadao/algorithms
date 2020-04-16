/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.
 * The distance between two adjacent cells is 1.
 *
 * Example 1:
 * Input:
 * [[0,0,0],
 * [0,1,0],
 * [0,0,0]]
 * Output:
 * [[0,0,0],
 *  [0,1,0],
 *  [0,0,0]]
 *
 * Example 2:
 * Input:
* [[0,0,0],
*  [0,1,0],
*  [1,1,1]]
* Output:
* [[0,0,0],
*  [0,1,0],
*  [1,2,1]]
*
* Note:
* The number of elements of the given matrix will not exceed 10,000.
* There are at least one 0 in the given matrix.
* The cells are adjacent in only four directions: up, down, left and right.
*/

public class Solution {
    public int[][] UpdateMatrix(int[][] matrix) {
        int M = matrix.Length;
        int[][] res = new int[M][];

        if (M == 0) return res;
        int N = matrix[0].Length;

        for (int i = 0; i < M; i += 1) {
            res[i] = new int[N];
            for (int j = 0; j < N; j += 1) {
                if (matrix[i][j] == 0) {
                    res[i][j] = 0;
                } else {
                    res[i][j] = bfs(i, j);
                }
            }
        }

        int bfs(int i, int j) {
            int[,] cache = new int[M, N];

            Queue<int[]> queue = new Queue<int[]>();
            queue.Enqueue(new int[]{ i, j });

            int dis = 0;
            while (queue.Count > 0) {
                int len = queue.Count;
                while (len > 0) {
                    int[] data = queue.Dequeue();
                    int r = data[0];
                    int c = data[1];

                    if (matrix[r][c] == 0) return dis;
                    cache[r, c] = 1;

                    foreach (int[] next in new int[4][] {
                        new int[]{ r + 1, c },
                        new int[]{ r - 1, c },
                        new int[]{ r, c + 1 },
                        new int[]{ r, c - 1 }
                    }) {
                        if (next[0] < 0 || next[1] < 0 || next[0] >= M || next[1] >= N) continue;
                        if (cache[next[0], next[1]] == 1) continue;
                        queue.Enqueue(next);
                    }
                    len -= 1;
                }
                dis += 1;
            }
            return dis;
        }

        return res;
    }
}