/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * In a town, there are N people labelled from 1 to N.
 * There is a rumor that one of these people is secretly the town judge.
 * If the town judge exists, then:
 * - The town judge trusts nobody.
 * - Everybody (except for the town judge) trusts the town judge.
 * - There is exactly one person that satisfies properties 1 and 2.
 * You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.
 * If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.
 *
 * Example 1:
 * Input: N = 2, trust = [[1,2]]
 * Output: 2
 *
 * Example 2:
 * Input: N = 3, trust = [[1,3],[2,3]]
 * Output: 3
 *
 * Example 3:
 * Input: N = 3, trust = [[1,3],[2,3],[3,1]]
 * Output: -1
 *
 * Example 4:
 * Input: N = 3, trust = [[1,2],[2,3]]
 * Output: -1
 *
 * Example 5:
 * Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
 * Output: 3
 *
 * Note:
 * 1 <= N <= 1000
 * trust.length <= 10000
 * trust[i] are all different
 * trust[i][0] != trust[i][1]
 * 1 <= trust[i][0], trust[i][1] <= N
*/

public class Solution {
    public int FindJudge(int N, int[][] trust) {
        int[] arr1 = new int[N];
        int[] arr2 = new int[N];

        foreach (int[] arr in trust) {
            arr1[arr[0] - 1] += 1;
            arr2[arr[1] - 1] += 1;
        }

        int res = -1;
        for (int i = 0; i < N; i += 1) {
            if (arr1[i] == 0 && arr2[i] == N - 1) {
                if (res != -1) return -1;
                res = i + 1;
            }
        }
        return res;
    }
}