/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * In a given 2D binary array A, there are two islands.
 * (An island is a 4-directionally connected group of 1s not connected to any other 1s.)
 * Now, we may change 0s to 1s so as to connect the two islands together to form 1 island.
 * Return the smallest number of 0s that must be flipped.  (It is guaranteed that the answer is at least 1.)
 *
 * Example 1:
 * Input: [[0,1],[1,0]]
 * Output: 1
 *
 * Example 2:
 * Input: [[0,1,0],[0,0,0],[0,0,1]]
 * Output: 2
 *
 * Example 3:
 * Input: [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
 * Output: 1
 *
 * Note:
 * 1 <= A.length = A[0].length <= 100
 * A[i][j] == 0 or A[i][j] == 1
*/

public class Solution {
    public int ShortestBridge(int[][] A) {
        Queue<int[]> coordinates = new Queue<int[]>();
        int[][] directions = new int[][]{
            new int[]{ 0, 1 },
            new int[]{ 0, -1 },
            new int[]{ 1, 0 },
            new int[]{ -1, 0 }
        };

        void dfs(int i, int j) {
            A[i][j] = 2;
            bool used = false;
            foreach (int[] direction in directions) {
                int row = i + direction[0];
                int col = j + direction[1];
                if (row < 0 || col < 0 || row >= A.Length || col >= A[0].Length) continue;
                if (A[row][col] == 0 && !used) {
                    used = true;
                    coordinates.Enqueue(new int[]{ i, j });
                } else if (A[row][col] == 1){
                    dfs(row, col);
                }
            }
        }

        for (int i = 0; i < A.Length; i += 1) {
            for (int j = 0; j < A[i].Length; j += 1) {
                if (A[i][j] == 1) {
                    dfs(i, j);
                    break;
                }
            }
            if (coordinates.Count > 0) break;
        }

        int step = 0;
        while (coordinates.Count > 0) {
            int len = coordinates.Count;
            while (len > 0) {
                int[] point = coordinates.Dequeue();
                foreach (int[] direction in directions) {
                    int row = point[0] + direction[0];
                    int col = point[1] + direction[1];
                    if (row < 0 || col < 0 || row >= A.Length || col >= A[0].Length || A[row][col] == 2) continue;
                    if (A[row][col] == 1) return step;
                    A[row][col] = 2;
                    coordinates.Enqueue(new int[]{ row, col });
                }
                len -= 1;
            }
            step += 1;
        }

        return step - 1;
    }
}
