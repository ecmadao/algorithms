/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * There are n computers numbered from 0 to n-1 connected by ethernet cables connections forming a network where connections[i] = [a, b] represents a connection between computers a and b.
 * Any computer can reach any other computer directly or indirectly through the network.
 * Given an initial computer network connections.
 * You can extract certain cables between two directly connected computers,
 * and place them between any pair of disconnected computers to make them directly connected.
 * Return the minimum number of times you need to do this in order to make all the computers connected.
 * If it's not possible, return -1. 
 *
 * Example 1:
 * Input: n = 4, connections = [[0,1],[0,2],[1,2]]
 * Output: 1
 * Explanation: Remove cable between computer 1 and 2 and place between computers 1 and 3.
 *
 * Example 2:
 * Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2],[1,3]]
 * Output: 2
 *
 * Example 3:
 * Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2]]
 * Output: -1
 * Explanation: There are not enough cables.
 *
 * Example 4:
 * Input: n = 5, connections = [[0,1],[0,2],[3,4],[2,3]]
 * Output: 0
 *
 * Constraints:
 * 1 <= n <= 10^5
 * 1 <= connections.length <= min(n*(n-1)/2, 10^5)
 * connections[i].length == 2
 * 0 <= connections[i][0], connections[i][1] < n
 * connections[i][0] != connections[i][1]
 * There are no repeated connections.
 * No two computers are connected by more than one cable.
*/

public class Solution {
    public int MakeConnected(int n, int[][] connections) {
        if (connections.Length < n - 1) return -1;
        int[] uf = Enumerable.Range(0, n).ToArray();

        int Find(int i) {
            while (uf[i] != i) i = uf[i];
            return i;
        }

        int line = 0;
        void Union(int i, int j) {
            int f1 = Find(i);
            int f2 = Find(j);

            if (f1 == f2) line += 1;
            uf[f1] = f2;
        }
    
        foreach (int[] connection in connections) Union(connection[0], connection[1]);

        int individual = uf.Where((k, i) => i == uf[i]).Count();
        if (line < individual - 1) return -1;
        return individual - 1;
    }
}