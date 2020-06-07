/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
 * Your algorithm should run in O(n) complexity.
 *
 * Example:
 * Input: [100, 4, 200, 1, 3, 2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
*/

public class Solution {
    public int LongestConsecutive(int[] nums) {
        Dictionary<int, int[]> dict = new Dictionary<int, int[]>();
        int res = 0;

        foreach (int num in nums) {
            if (dict.ContainsKey(num)) continue;
            dict[num] = new int[]{ num, num };

            int next = num + 1;
            int pre = num - 1;
            if (dict.ContainsKey(next)) {
                int[] nextChain = dict[next];
                dict[num][1] = nextChain[1];
                dict[nextChain[1]][0] = dict[num][0];
            }
            if (dict.ContainsKey(pre)) {
                int[] preChain = dict[pre];
                dict[num][0] = preChain[0];
                dict[preChain[0]][1] = dict[num][1];
                dict[dict[num][1]][0] = preChain[0];
            }

            res = Math.Max(res, dict[num][1] - dict[num][0] + 1);
        }
        return res;
    }
}
